# stocklite-obtener-inventario

Función AWS Lambda desarrollada en Python (`boto3`) para consultar el inventario de una tienda en la tabla DynamoDB `StockLite_Inventario` filtrando por `tiendaId` y evaluando `alertaReposicion`.

# Archivos incluidos
- `lambda_function.py`: Lógica principal de consulta, cálculo de alerta de reposición y respuesta con encabezados CORS.
- `event-prueba-admin.json`: Evento de prueba con `tiendaId` para validar la consulta de inventario.
- `event-prueba-sin-tienda.json`: Evento de prueba sin `tiendaId` para validar la respuesta de error.
