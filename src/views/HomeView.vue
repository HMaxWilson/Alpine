<template>
  <Splide :options="{ rewind: true }">
    <SplideSlide>
      <div class="relative">
        <img class="max-h-[500px] w-full object-cover" src="/src/assets/images/carousel/Stock1.jpg" alt="">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div class="flex flex-col justify-center h-full">
            <h1 class="text-lg md:text-3xl xl:text-5xl font-bold text-center text-white">The Local Maintenance Specialists You Can Trust</h1>
            <h2 class="text-base md:text-lg xl:text-2xl font-bold text-center text-white">Ensuring your holiday home is in safe hands</h2>
          </div>
        </div>
      </div>
    </SplideSlide>

    <SplideSlide>
      <div class="relative">
        <img class="max-h-[500px] w-full object-cover" src="/src/assets/images/carousel/Stock2.jpg" alt="">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div class="flex flex-col justify-center h-full">
            <h1 class="text-lg md:text-3xl xl:text-5xl font-bold text-center text-white">Family Run Business</h1>
            <h2 class="text-base md:text-lg xl:text-2xl font-bold text-center text-white">Maintaining your family holiday home as if it was our own</h2>
          </div>
        </div>
      </div>
    </SplideSlide>

    <SplideSlide>
      <div class="relative">
        <img class="max-h-[500px] w-full object-cover" src="/src/assets/images/carousel/Stock3.jpg" alt="">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div class="flex flex-col justify-center h-full">
            <h1 class="text-lg md:text-3xl xl:text-5xl font-bold text-center text-white">Knowing Your Unknown</h1>
            <h2 class="text-base md:text-lg xl:text-2xl font-bold text-center text-white">Experienced in knowing what you need before you know you need it!</h2>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>

  <div class="p-8 mx-auto flex">
    <div class="h-auto text-white">
      <h1 class="text-5xl font-bold pb-4 text-center">Welcome</h1>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto atque blanditiis culpa dolores error et facilis ipsum, laudantium libero magni molestiae nam quaerat quam sapiente, sit suscipit veritatis! Asperiores blanditiis culpa deleniti dolor dolorem dolores doloribus dolorum eius enim error in magni minima, minus odit, optio quia reiciendis voluptate.</p>
    </div>
  </div>
</template>