npx prisma init

add models in schema.prisma
npx prisma migrate dev --name init

script for database migration file generation based on changes
npm run db:migration:create --name=fileName

create a seed file
npm run db:seed:create --name=fileName