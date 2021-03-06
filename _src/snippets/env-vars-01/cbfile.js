const cb = require('crossbow');

cb.env({
    IMAGE: 'shakyshane/crossbow-web',
    PROD_FILE: 'docker-compose.prod.yaml'
});

cb.group('docker', {
    'push': '@sh docker push $IMAGE',
    'build': '@sh docker build -t $IMAGE .',
    'up-dev': '@sh docker-compose up -d',
    'up-prod': '@sh docker-compose -f $PROD_FILE up -d'
});
