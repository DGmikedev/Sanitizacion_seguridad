import { ComprobationError, ExecutionError  } from "../src/results/Errors.js";

describe("\n===Error ===\n", ()=>{
    test('Error Comprobation ', ()=>{
        expect(()=>{
            throw new ComprobationError('Error of comprobation')
        }).toThrow(ComprobationError)
    });

    test('Error Execution', ()=>{
        expect(()=>{
            throw new ExecutionError('Error of execution')
        }).toThrow(ExecutionError)
    });
});