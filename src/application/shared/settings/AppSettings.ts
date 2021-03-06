export default class AppSettings {
  static DefaultLang: string;
  static EncryptionKey: string;
  static EncryptionIterations: number;
  static EncryptionKeySize: number;
  static ServerRoot: string;
  static ServerPort: number;
  static ServerHost: string;
  static ServerOrigins: string;
  static JWTEncryptionKey: string;
  static JWTExpirationTime: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static init(config: { [key: string]: any }): void {
    this.DefaultLang = config.Params.DefaultLang;
    this.EncryptionKey = config.Params.Security.CRYPTO.EncryptionKey;
    this.EncryptionIterations = config.Params.Security.CRYPTO.EncryptionIterations;
    this.EncryptionKeySize = config.Params.Security.CRYPTO.EncryptionKeySize;
    this.ServerRoot = config.Server.Root;
    this.ServerHost = config.Server.Host;
    this.ServerPort = config.Server.Port;
    this.ServerOrigins = config.Server.Origins;
    this.JWTEncryptionKey = config.Params.Security.JWT.SecretKey;
    this.JWTExpirationTime = config.Params.Security.JWT.ExpireInSeconds;
  }
}
