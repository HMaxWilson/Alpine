<script setup>
  const services = [
    {
      Title: 'Holiday Home Survey',
      Description: 'Not sure where to start or what your holiday home needs?',
      Price: '90',
      PriceNote: '+VAT',
      Guarantees: [
        'Holiday home survey that covers all bases',
        'Full report on condition of the property within 5 days',
        'Advice and recommendations for property maintenance',
        'Fixed charge of £90 +VAT (No hidden/extra charges!)',
        'Free consultation regarding your report (in person or over Zoom)'
      ],
    },
    {
      Title: 'Ad-Hoc Maintenance',
      Description: 'We are always happy to support our clients on an ad-hoc basis',
      Price: 'POA',
      PriceNote: null,
      Guarantees: [
        'Peace of mind in knowing we are there when you need us',
        'Free consultation and quotation',
        'Provision of maintenance including labour and materials',
        'Flexible payment options',
      ],
    },
    {
      Title: 'Managed Service',
      Description: 'Unlimited 24/7 support for a fixed monthly fee',
      Price: '499',
      PriceNote: '+VAT/month',
      Guarantees: [
        'Unlimited support & callouts',
        'All general maintenance taken care of',
        'Annual survey',
        'No hidden fees - any out of scope works will be discussed and quoted for',
      ],
    },
  ];

</script>

<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Build a package to suit your holiday home</h2>
      <p class="mb-5 font-light text-white sm:text-lg">Not sure what package will work for you? No problem! Get in touch with David and Charlotte today to find a solution that works for you</p>
    </div>
    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      <div v-for="service in services" class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
        <h3 class="mb-4 text-2xl font-semibold">{{ service.Title }}</h3>
        <p class="font-light text-gray-500 sm:text-lg">{{ service.Description }}</p>
        <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">£{{ service.Price }}</span>
          <span class="text-gray-500">{{ service.PriceNote }}</span>
        </div>
        <ul role="list" class="mb-8 space-y-4 text-left">
          <li v-for="guarantee in service.Guarantees" class="flex items-center space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span>{{ guarantee }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <a class="text-3xl" href="mailto:hello@alpinemaintenance.co.uk">
      <button class="p-8 bg-white text-white font-bold rounded-md text-xl bg-opacity-25">
        Get in touch
      </button>
    </a>
  </div>
</template>