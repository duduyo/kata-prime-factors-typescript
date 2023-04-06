import {describe, expect, it} from 'vitest'
import PrimeFactors from "../src/PrimeFactors";


describe("Foo test", () => {

    const primeFactors = new PrimeFactors();

    it("Should return no factors for 1", () => {
        expect(primeFactors.factorsOf(1)).toEqual([]);
    });

    it("Should return factors for 2", () => {
        expect(primeFactors.factorsOf(2)).to.have.members([2]);
        expect(primeFactors.factorsOf(2 * 2)).to.have.members([2, 2]);
        expect(primeFactors.factorsOf(2 * 2 * 2)).to.have.members([2, 2, 2]);
    });

    it("Should return factors for 3", () => {
        expect(primeFactors.factorsOf(3)).to.have.members([3]);
        expect(primeFactors.factorsOf(3 * 3)).to.have.members([3, 3]);
        expect(primeFactors.factorsOf(3 * 3 * 3)).to.have.members([3, 3, 3]);
    });

    it("Should return factors for 5", () => {
        expect(primeFactors.factorsOf(5)).to.have.members([5]);
        expect(primeFactors.factorsOf(5 * 5)).to.have.members([5, 5]);
        expect(primeFactors.factorsOf(5 * 5 * 5)).to.have.members([5, 5, 5]);
    });

    it("Should return factors for 30", () => {
        expect(primeFactors.factorsOf(5 * 3 * 2)).to.have.members([5, 2, 3]);
    });
    it("Should return factors for big number", () => {
        expect(primeFactors.factorsOf(139079)).to.have.members([5, 2, 3]);
    });


});
