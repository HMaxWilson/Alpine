<script setup>
  const team = [
    {
      Name: 'Dave Pestell',
      Role: 'Maintenance Lead',
      Image: 'src/assets/images/team/dave.jpg',
      Bio: 'Leading the team is founder and owner David, who has over 30-years-experience in the building trade and ' +
          'expertise in all areas of building work and project management. He’s meticulous in his work, tenacious in ' +
          'his approach and no challenge is too big or small for Dave. “There’s always ways and means” is one of the ' +
          'favourites of Dave\'s (many!) catchphrases , and when he’s not out building an extension somewhere you’ll ' +
          'find him cruising the ‘mean streets’ of Hertfordshire on his Triumph Speedmaster.'
    },
    {
      Name: 'Tracey Pestell',
      Role: 'Administrator',
      Image: 'src/assets/images/team/tracey.jpg',
      Bio: 'Whilst Dave and Brad are busy doing the physical building work, Tracey takes care of the administrative ' +
          '\'heavy lifting\'. From working with the quantity surveyor to put together job estimates, to responding to ' +
          'emails and dealing with suppliers, Tracey is always busy working away in the background to help a customer ' +
          'and support the team. She\'s also an expert at chasing unpaid invoices - you have been warned!'
    },
    {
      Name: 'Charlotte Pestell',
      Role: 'Client Services',
      Image: 'src/assets/images/team/charlotte.jpg',
      Bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias animi consectetur ' +
          'consequatur dolor, eum eveniet impedit incidunt nostrum odio ratione suscipit, vitae voluptatem. Ab ' +
          'aliquid animi aperiam consequatur, dicta, earum ex, exercitationem laborum minus nam placeat quaerat quo ' +
          'ratione sint soluta vitae voluptatem! Cumque dolores eveniet magnam sequi tempora.'
    },
    {
      Name: 'Brad Pestell',
      Role: 'Maintenance',
      Image: 'src/assets/images/team/brad.jpg',
      Bio: 'Following closely in his father’s footsteps, Brad is a qualified carpenter and joiner with over 10 years ' +
          'experience in the building trade. He’s a real ‘people person’ and loves nothing more than getting stuck in ' +
          'and helping customers with their projects. Brad is also a keen motorcyclist and when he’s not out on his ' +
          'bike you’ll find him out on his mountain bike or playing football.'
    },
  ];
</script>

<template>
  <div class="container mx-auto">
    <div class="flex">
      <div v-for="member in team" class="w-1/3 mx-4">
        <img class="rounded-lg" :src="member.Image" alt="Dave Pestell" />
        <h2 class="text-white text-4xl my-6">{{ member.Name }}</h2>
        <h3 class="text-gray-200 text-lg my-1">{{ member.Role }}</h3>
        <p class="text-gray-300">{{ member.Bio }}</p>
      </div>
    </div>
  </div>
</template>