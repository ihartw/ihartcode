import { reactive, ref } from 'vue'

export const store = reactive({
   navVisible: false,
   scrollTo(elm) {
      document.getElementById(elm).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
   },
})