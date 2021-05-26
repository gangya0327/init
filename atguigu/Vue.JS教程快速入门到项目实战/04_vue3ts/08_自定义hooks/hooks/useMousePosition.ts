import { onMounted, ref, onBeforeUnmount } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  const x = ref(-1);
  const y = ref(-1);
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  onMounted(() => {
    window.addEventListener('click', clickHandler);
  });
  onBeforeUnmount(() => {
    window.addEventListener('click', clickHandler);
  });
  return { x, y };
}
