import { Count } from "src/app/domain/models/resources/count.model";
import { Counter } from "src/app/domain/models/resources/counter.model";

export let mockCounterList: Counter[] = [
    { title: 'test1', count: new Count(0) }, { title: 'test2', count: new Count(1) }, { title: 'test3', count: new Count(2) }
]