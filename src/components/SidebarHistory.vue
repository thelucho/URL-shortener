<template>
  <section
    class="fixed inset-y-0 right-0 w-1/4 bg-white border-l border-indigo-100 rounded-l-3xl sidebar"
  >
    <div class="px-4 py-10">
      <h2 class="text-lg font-semibold mb-6">Shortened URLs history</h2>
      <ul>
        <li class="py-2 border-b border-teal-lighter text-left flex flex-col text-sm">
          <span class="border-l-4 border-indigo-400 mb-2 pl-3 py-1 text-slate-300">https://www.codegrepper.com/code-examples/javascript/how+to+post+form+data+using+axios</span>
          <span class="border-l-4 border-green-400 pl-3 py-1 font-medium">https://bit.ly/a345sdfnsdf</span>
        </li>
        <li class="py-2 border-b border-teal-lighter text-left flex flex-col text-sm">
          <span class="border-l-4 border-indigo-400 mb-2 pl-3 py-1 text-slate-300">https://www.codegrepper.com/code-examples/javascript/how+to+post+form+data+using+axios</span>
          <span class="border-l-4 border-green-400 pl-3 py-1 font-medium">https://bit.ly/a345sdfnsdf</span>
        </li>
        <li class="py-2 border-b border-teal-lighter text-left flex flex-col text-sm">
          <span class="border-l-4 border-indigo-400 mb-2 pl-3 py-1 text-slate-300">https://www.codegrepper.com/code-examples/javascript/how+to+post+form+data+using+axios</span>
          <span class="border-l-4 border-green-400 pl-3 py-1 font-medium">https://bit.ly/a345sdfnsdf</span>
        </li>
        <li class="py-2 border-b border-teal-lighter text-left flex flex-col text-sm">
          <span class="border-l-4 border-indigo-400 mb-2 pl-3 py-1 text-slate-300">https://www.codegrepper.com/code-examples/javascript/how+to+post+form+data+using+axios</span>
          <span class="border-l-4 border-green-400 pl-3 py-1 font-medium">https://bit.ly/a345sdfnsdf</span>
        </li>
        <li class="py-2 border-b border-teal-lighter text-left flex flex-col text-sm">
          <span class="border-l-4 border-indigo-400 mb-2 pl-3 py-1 text-slate-300">https://www.codegrepper.com/code-examples/javascript/how+to+post+form+data+using+axios</span>
          <span class="border-l-4 border-green-400 pl-3 py-1 font-medium">https://bit.ly/a345sdfnsdf</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sidebar {
  overflow-wrap: break-word;
  transition: all 0.3s ease-in-out;
  transform: translateX(100%);
}
.sidebar.active {
  transform: translateX(0rem);
  transition: all 0.3s ease-in-out;
}
</style>