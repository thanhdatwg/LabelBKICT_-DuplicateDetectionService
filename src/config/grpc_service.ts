import { token } from "brandi";

export class GRPCServerConfig {
    public port = 20005;

    public static fromEnv(): GRPCServerConfig {
        const config = new GRPCServerConfig();
        if (process.env.CLASSIFICATION_PORT !== undefined) {
            config.port = +process.env.CLASSIFICATION_PORT;
        }
        return config;
    }
}

export const GRPC_SERVER_CONFIG = token<GRPCServerConfig>("GRPCServerConfig");
