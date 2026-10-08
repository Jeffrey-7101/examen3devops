#!/bin/sh

DATE=$(date +%Y%m%d%H%M%S)
FILE="/tmp/db_examen.sql"

echo "Creando backup..."

PGPASSWORD="$DB_PASSWORD" pg_dump \
  -h "$DB_HOST" \
  -p "$DB_PORT" \
  -U "$DB_USER_NAME" \
  -d "$DB_NAME" \
  > "$FILE"

echo "Subiendo backup a S3..."

aws s3 cp "$FILE" \
  "s3://bucket-codigo-backup-pinto/Pinto/database/$DATE/db_examen.sql"

echo "Backup completado"