
    const connection = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password : 'felipe44',
        database : 'repuestos',
        entities : ['dist/**/*.entity{.ts,.js}'],
        synchronize : false,
        retryDelay: 3000,
        retryAttempts: 10
    };

    const remoteConection = {
        type: 'postgres',
        host: '192.168.1.103',
        port: 5432,
        username: 'postgres',
        password : 'felipe44',
        database : 'repuestos',
        entities : ['dist/**/*.entity{.ts,.js}'],
        synchronize : false,
        retryDelay: 3000,
        retryAttempts: 10
    }

    const _var = "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";

module.exports = {
    connection,
    remoteConection
}