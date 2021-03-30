const dogDB = [
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Max",
    breed: "Border Collie",
    age: "3",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/border-collie-dog-breed-pictures/10-senior.jpg",
    description:
      "The Border Collie dog breed was developed to gather and control sheep in the hilly border country between Scotland and England. They’re known for their intense stare, or “eye,” with which they control their flock. They’re dogs with unlimited energy, stamina, and working drive, all of which make them a premier herding dog; Border Collies are still used today to herd sheep on farms and ranches around the world.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Toby",
    breed: "Boston Terrier",
    age: "5",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/boston-terrier-dog-breed-pictures/9-sleepy.jpg",
    description:
      "The Boston Terrier has been popular since their creation a little more than a century ago. They were originally bred to be fighting dogs, but today, they’re gentle, affectionate companions with tuxedo-like markings that earned them the nickname “American Gentleman.”",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Thor",
    breed: "Boxer",
    age: "3",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-guess-the-breed-1.jpg",
    description:
      "Boxer dogs were originally bred to be medium-size guard dogs. Square-jawed and muscular, this breed is the George Clooney of the dog world–a looker with a sense of humor and an underlying sweetness. They adore their families and will also appreciate consistent training that doesn’t rely on harsh reprimands.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Max",
    breed: "Cardigan Welsh Corgi",
    age: "2.5",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/factfront-3_680-453.jpg",
    description:
      "The Cardigan Welsh Corgi is the older of the two Corgi dog breeds, with dogs of this type believed to have existed in Wales for more than 3,000 years. Throughout history, people used these dogs to drive cattle to market. These days, they mostly love to spend time with their families and are active, fun-loving playmates for school-age children.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Baba",
    breed: "Basset Hound",
    age: "2",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/basset-hound-dog-breed-pictures/7-puppy.jpg",
    description:
      "The Basset Hound dog breed was bred for hunting small game such as rabbits and is still used for this purpose in some parts of the United States. When they’re not on the trail of a bunny, they’re laid-back family friends who love kids.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Thor",
    breed: "Beagle",
    age: "3",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/beagle-dog-breed-pictures/6-fullbod3q.jpg",
    description:
      "Small, compact, and hardy, Beagles are active companions for kids and adults alike. Canines of this dog breed are merry and fun loving, but being hounds, they can also be stubborn and require patient, creative training techniques.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Luna",
    breed: "American Pit Bull Terrier",
    age: "3",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-10.jpg",
    description:
      "The American Pit Bull Terrier is a companion and family dog breed. Originally bred to “bait” bulls, the breed evolved into all-around farm dogs, and later moved into the house to become “nanny dogs” because they were so gentle around children",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Nieve",
    breed: "Australian Shepherd",
    age: "7",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/austalian-shepherd-dog-breed-pictures/2-layingforward.jpg",
    description:
      "The Aussie, as they’re nicknamed, are happiest when they have a job to do. They can be wonderful family companions if their intelligence and energy are channeled into dog sports or activities.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Nala",
    breed: "Chow Chow",
    age: "3",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/3-fullbody.jpg",
    description:
      "The distinctive-looking Chow Chow dog breed has a proud, independent spirit that some describe as catlike. They can be aloof — if you’re looking for a cuddle buddy, this probably isn’t the best breed for you — and downright suspicious of strangers. But for the right person, they can be a fiercely loyal companion.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Lola",
    breed: "Dalmatian",
    age: "8",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/dalmatian-dog-breed-pictures/3-profile.jpg",
    description:
      "As charming in life as in film, Dalmatians go from gallant to goofy to gallant again in the blink of an eye. They love to be a part of everything their family does. That said, they have high energy levels and need plenty of exercise. If you’re looking for a jogging partner and friend who’ll love you unconditionally, this may be the breed for you!",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Bimba",
    breed: "French Bulldog",
    age: "3.5",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/5-sitting.jpg",
    description:
      "Besides being companions, they once served as excellent ratters, but today their job focuses on being fabulous family friends and show dogs. Even apartment dwellers and first-time pet parents will love this affectionate breed.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Max",
    breed: "Giant Schnauzer",
    age: "8",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/giant-schnauzer-dogs-and-puppies/giant-schnauzer-dogs-puppies-7.jpg",
    description:
      "Giant Schnauzers love to play and have high energy. They do best in homes with big yards to run and get plenty of exercise. Apartment life generally isn’t for them, and novice trainers beware. However, if you want a loyal guardian and energetic companion, this pooch may be your new best friend!",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Simba",
    breed: "Border Collie",
    age: "3",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/border-collie-dog-breed-pictures/10-senior.jpg",
    description:
      "The Border Collie dog breed was developed to gather and control sheep in the hilly border country between Scotland and England. They’re known for their intense stare, or “eye,” with which they control their flock. They’re dogs with unlimited energy, stamina, and working drive, all of which make them a premier herding dog; Border Collies are still used today to herd sheep on farms and ranches around the world.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Mia",
    breed: "Golden Retriever",
    age: "6",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/golden-retriever-dogs-and-puppies/golden-retriever-dogs-puppies-7.jpg",
    description:
      "These dogs are fairly easy to train and get along in just about any home or family. They’re great with kids and very protective of their humans. If you want a loyal, loving, and smart companion, consider adopting one of these pups into your pack",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Leo",
    breed: "Great Dane",
    age: "5",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-1.jpg",
    description:
      "Great Danes certainly hold stature in the dog world; but though they look terribly imposing, in reality they’re one of the best-natured dogs around. For all of their size, Great Danes are sweet, affectionate pets. They love to play and are gentle with children.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Kiara",
    breed: "Komondor",
    age: "7.5",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/komondor-dogs-and-puppies/komondor-dogs-puppies-6.jpg",
    description:
      "Affectionate with their families, these dogs are intelligent and eager to please. Because they’re so protective, they can make decent watchdogs and will bark if anything is amiss. They aren’t, however, well-suited for apartment life and prefer to have lots of room to run and burn off energy. For a larger home in need of a loving guardian, this may be the dog for the job.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Dana",
    breed: "Maltese",
    age: "4",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/maltese-dog-breed-picture/9-fullbody.jpg",
    description:
      "A gentle and fearless dog breed, the Maltese greets everyone as a friend. Their glamorous white coat gives them a look of haughty nobility, but looks can be deceiving.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Maya",
    breed: "Labrador Retriever",
    age: "5",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-8.jpg",
    description:
      "The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, they earned their keep as fishermen’s helpers: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Coco",
    breed: "Old English Sheepdog",
    age: "4",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/old-english-sheepdog-dog-breed-pictures/side-5.jpg",
    description:
      "The OES is an adaptable, intelligent dog with an easygoing disposition. They’re affectionate with all members of their families, and despite the fact that they are large dogs, they can fit in well with apartment life so long as they get enough exercise from walks and play sessions. Their shaggy coats also don’t tend to shed as much as you might think. If you’re looking for a loyal, protective, and loving family companion, this may be the breed for you!",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Dana",
    breed: "Maltese",
    age: "4",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/maltese-dog-breed-picture/9-fullbody.jpg",
    description:
      "A gentle and fearless dog breed, the Maltese greets everyone as a friend. Their glamorous white coat gives them a look of haughty nobility, but looks can be deceiving.",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Pomelo",
    breed: "Pug",
    age: "4",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/2-face.jpg",
    description:
      "Pugs are highly sensitive, and though they can make for great apartment pets, they will not appreciate being left home alone for long hours of the day. Although these pups have a stubborn side, especially when it comes to house training, they’re playful, affectionate dogs who will get along well even with novice pet parents. If you’re looking for a loving, easygoing pal, this may be the breed for you!",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Otto",
    breed: "Rottweiler",
    age: "6",
    gender: "male",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/rottweiler-dogs-and-puppies/rottweiler-dogs-puppies-10.jpg",
    description:
      "Rottweilers are popular family guardians and friends. Novice pet parents should beware, as these dogs are strong and intense. They need experienced care and training. Consistent, energetic pet parents will find a loving, faithful, and intelligent friend for life in a Rottie!",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Canela",
    breed: "Shih Tzu",
    age: "8",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/shih-tzu-dog-breed-pictures/shih-tzu-breed-picture-5.jpg",
    description:
      "Bred solely to be companions, Shih Tzus are affectionate, happy, outgoing house dogs who love nothing more than to follow their people from room to room. Since ancient times, they’ve made themselves comfortable on the laps of people from all walks of life, even emperors!",
  },
  {
    owner: "60608855611ebaad1d9ef97d",
    name: "Mara",
    breed: "Weimaraner",
    age: "4",
    gender: "female",
    dogImage:
      "https://dogtime.com/assets/uploads/gallery/weimaraner-dog-breed-pictures/3-sidebrude.jpg",
    description:
      "Weimaraners can make excellent companions, but due to their hunting heritage, they have a lot of energy and high prey drive. Novice owners and apartment dwellers should beware, as this dog needs consistent training and plenty of activity. That said, if you’re prepared to meet the breed’s needs, you’ll be rewarded with a devoted and affectionate addition to your family.",
  },
];

require("dotenv").config();
require("./db.config")();
const Dog = require("../model/dog.model");
const mongoose = require("mongoose");

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

async function seedDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, dbOptions);
    const dogs = await Dog.create(dogDB);
    console.log("This is your DogDB!!!!", dogs);
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seedDb();
