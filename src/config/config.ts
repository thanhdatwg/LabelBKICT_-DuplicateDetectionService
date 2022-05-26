import { token } from "brandi";
import { ApplicationConfig } from "./application";
import { DatabaseConfig } from "./database";
import { DistributedConfig } from "./distributed";
import { GRPCServerConfig } from "./grpc_service";
import { ImageServiceConfig } from "./image_service";
import { KafkaConfig } from "./kafka";
import { LogConfig } from "./log";
import { PolypDetectionServiceConfig } from "./polyp_detect_service";

export class ClassificationServiceConfig {
    public logConfig = new LogConfig();
    public databaseConfig = new DatabaseConfig();
    public kafkaConfig = new KafkaConfig();
    public imageServiceConfig = new ImageServiceConfig();
    public polypDetectionServiceConfig = new PolypDetectionServiceConfig();
    public grpcServerConfig = new GRPCServerConfig();
    public distributedConfig = new DistributedConfig();
    public applicationConfig = new ApplicationConfig();

    public static fromEnv(): ClassificationServiceConfig {
        const config = new ClassificationServiceConfig();
        config.logConfig = LogConfig.fromEnv();
        config.databaseConfig = DatabaseConfig.fromEnv();
        config.kafkaConfig = KafkaConfig.fromEnv();
        config.imageServiceConfig = ImageServiceConfig.fromEnv();
        config.polypDetectionServiceConfig =
            PolypDetectionServiceConfig.fromEnv();
        config.grpcServerConfig = GRPCServerConfig.fromEnv();
        config.distributedConfig = DistributedConfig.fromEnv();
        config.applicationConfig = ApplicationConfig.fromEnv();
        return config;
    }
}

export const CLASSIFICATION_SERVICE_CONFIG_TOKEN = token<ClassificationServiceConfig>(
    "ClassificationServiceConfig"
);
