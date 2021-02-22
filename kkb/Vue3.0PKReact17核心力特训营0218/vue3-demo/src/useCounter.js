import { ref } from 'vue'

export default function useCounter() {
  let counter = ref(1)
  function addCounter() {
    counter.value += 1
  }
  return { counter, addCounter }
}

// composition和hooks