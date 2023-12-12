docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba1-java/app ../../..
