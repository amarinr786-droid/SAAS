import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("StockLite_Inventario")

def lambda_handler(event, context):
    params = event.get("queryStringParameters") or {}
    tienda_id = params.get("tiendaId") or event.get("tiendaId")

    if not tienda_id:
        return {
            "statusCode": 400,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({"error": "Falta tiendaId"})
        }

    respuesta = table.query(
        KeyConditionExpression=Key("tiendaId").eq(tienda_id)
    )
    items = respuesta.get("Items", [])

    productos = []
    for item in items:
        actual = int(item.get("stockActual", 0))
        minimo = int(item.get("stockMinimo", 0))
        productos.append({
            "productoId": item.get("productoId"),
            "nombre": item.get("nombre", item.get("productoId")),
            "stockActual": actual,
            "stockMinimo": minimo,
            "alertaReposicion": actual <= minimo
        })

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "tiendaId": tienda_id,
            "productos": productos
        })
    }
