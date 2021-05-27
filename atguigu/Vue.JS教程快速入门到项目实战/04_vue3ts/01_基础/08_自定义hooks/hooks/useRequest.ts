import axios from 'axios';
import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function<T> (url: string) {
  const loading = ref(true);
  const data = ref<T | null>(null);
  const errorMsg = ref('');
  axios
    .get(url)
    .then((response) => {
      loading.value = false;
      data.value = response.data;
    })
    .catch((error) => {
      loading.value = false;
      errorMsg.value = error.message || '未知错误';
    });
  return {
    loading,
    data,
    errorMsg
  };
}
