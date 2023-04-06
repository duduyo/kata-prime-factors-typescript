export default class PrimeFactors {

    // return the prime factors of n
    factorsOf(n: number): number[] {
        const factors: number[] = [];

        for (let primeCandidate = 2; primeCandidate <= n; primeCandidate++) {
            while (n % primeCandidate === 0) {
                factors.push(primeCandidate);
                n = n / primeCandidate;
            }
        }
        return factors
    }
}