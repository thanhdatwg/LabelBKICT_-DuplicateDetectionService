import { Container } from "brandi";
import { initializeLogger, LOGGER_TOKEN } from "./logging";
import { TimeImpl, TIMER_TOKEN } from "./time";
import {
    BINARY_CONVERTER_TOKEN,
    BinaryConverterImpl,
} from "./binary_converter";

export * from "./errors";
export * from "./grpc";
export * from "./logging";
export * from "./time";
export * from "./binary_converter";

export function bindToContainer(container: Container): void {
    container
        .bind(LOGGER_TOKEN)
        .toInstance(initializeLogger)
        .inSingletonScope();
    container.bind(TIMER_TOKEN).toInstance(TimeImpl).inSingletonScope();
    container
    .bind(BINARY_CONVERTER_TOKEN)
    .toInstance(BinaryConverterImpl)
    .inSingletonScope();
}
