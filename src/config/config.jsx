const config = process.env.NODE_ENV === 'development' ? require('./config_dev').config : require('./config_pro').config

export default config
