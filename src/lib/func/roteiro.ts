export type Roteiro = [() => void, number];

export async function executarRoteiro(roteiros: Roteiro[]) {
  for (let [funcao, delay] of roteiros) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    funcao();
  }
}
