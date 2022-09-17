import { Count } from "src/app/domain/models/resources/count.model";
import { Counter } from "src/app/domain/models/resources/counter.model";
import { CounterId } from "src/app/domain/models/resources/counterId.model";

export let mockCounterList: Counter[] = [
    { id: new CounterId(1), title: 'test1', count: new Count(0) }, { id: new CounterId(2), title: 'test2', count: new Count(1) }, { id: new CounterId(3), title: 'test3', count: new Count(2) }
]