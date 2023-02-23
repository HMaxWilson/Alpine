<script setup>

const items = [
  {
    imageSrc: '../src/assets/images/carousel/Stock4.jpg',
    title: 'The Local Maintenance Specialists You Can Trust',
    subtitle: 'Ensuring your holiday home is in safe hands'
  },
  {
    imageSrc: '../src/assets/images/carousel/Stock2.jpg',
    title: 'Family Run Business',
    subtitle: 'Maintaining your family holiday home as if it was our own'
  },
  {
    imageSrc: '../src/assets/images/carousel/Stock3.jpg',
    title: 'Knowing Your Unknown',
    subtitle: 'Experienced in knowing what you need before you know you need it!'
  }
];
</script>

<template>
  <Splide :options="{ rewind: true }">
    <SplideSlide v-for="item in items">
      <div class="relative">
        <img class="max-h-[500px] w-full object-cover" :src="item.imageSrc" alt="">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div class="flex flex-col justify-center h-full">
            <h1 class="text-5xl font-bold text-center text-white">{{ item.title }}</h1>
            <h2 class="text-2xl font-bold text-center text-white">{{ item.subtitle }}</h2>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>

  <div class="py-12 mx-auto flex">
    <div class="w-1/3 pr-12">
      <img class="w-full rounded-r-lg" src="/src/assets/images/team/Dave.jpg" alt="Stock Image 1">
    </div>
    <div class="h-auto w-1/3 text-white">
      <h1 class="text-5xl font-bold pb-4 text-center">Welcome</h1>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, beatae deserunt eaque esse eveniet id maiores nesciunt quae saepe totam unde. Amet architecto asperiores, autem debitis, deleniti eaque esse fuga incidunt necessitatibus nostrum officiis quibusdam rem, repellendus reprehenderit temporibus veniam voluptas voluptate voluptatem voluptates voluptatum? Atque debitis dolor laboriosam necessitatibus suscipit tempora unde voluptate. Ab architecto aspernatur blanditiis consectetur corporis dolor dolores, est exercitationem illo inventore libero nihil, nobis odit optio quam quisquam ratione rem ullam unde ut! Alias assumenda distinctio molestiae? Alias, aliquam commodi, culpa cupiditate deserunt dolores dolorum excepturi inventore odit quae rem sequi similique tempore! Ab, ad aliquid, amet aspernatur aut beatae consectetur cum dolor eveniet excepturi facilis fugiat hic ipsam laboriosam magnam maiores nam necessitatibus, nulla odit omnis optio quo recusandae saepe sapiente sequi voluptatem voluptates. Aliquam dolores eligendi explicabo id in laudantium minima minus nemo, nisi numquam, obcaecati officiis quibusdam recusandae tempore temporibus vel veritatis? Aspernatur debitis ipsa nam placeat quam? Illum ipsam placeat similique. Ex natus placeat quisquam! Aspernatur illo odio odit sint temporibus. Animi at aut consectetur delectus dignissimos doloribus dolorum earum eligendi eos et facilis fuga illo illum ipsam molestias nesciunt nostrum obcaecati pariatur perspiciatis quas, quod, recusandae similique suscipit! Dolores.</p>
    </div>
    <div class="w-1/3 pl-12">
      <img class="w-full rounded-l-lg" src="/src/assets/images/team/Charlotte.jpg" alt="Stock Image 2">
    </div>
  </div>
</template>