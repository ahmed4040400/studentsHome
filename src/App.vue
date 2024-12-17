<template>
  <header
    class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2c2c2c] px-10 py-3 bg-[#23708A]">
    <div class="flex items-center gap-8">
      <div class="flex items-center gap-4 text-[#f0f0f0]">
        <div class="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40Z"
              fill="currentColor"></path>
          </svg>
        </div>
        <h2 class="text-[#f0f0f0] text-lg font-bold leading-tight tracking-[-0.015em]">StudentHomes</h2>
      </div>
    </div>
  </header>
  <RouterView />
</template>