# Ejemplo de respuesta - stocklite-obtener-inventario

La función consulta la tabla DynamoDB `StockLite_Inventario` mediante `boto3` filtrando por `tiendaId` y responde con encabezados CORS habilitados.

# Ejemplo de payload de salida
```json
{
  "statusCode": 200,
  "headers": {
    "Access-Control-Allow-Origin": "*"
  },
  "body": {
    "tiendaId": "ADMIN2026",
    "items": [
      {
        "stockActual": 5,
        "stockMinimo": 10,
        "alertaReposicion": true
      }
    ]
  }
}
