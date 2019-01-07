/**
 * On how to setup configuration files,
 * @see https://codingsans.com/blog/node-config-best-practices
 */

const config = {
  production: {
    apiUrl: "/"
  },
  development: {
    // apiUrl: "http://13.58.93.53:8080/"
    apiUrl: "http://nodereacttest-env.th8vtgbnhi.us-east-2.elasticbeanstalk.com/"
  }
};

const env =
  process && process.env && process.env.NODE_ENV
    ? process.env.NODE_ENV
    : "production";

export default config[env];
