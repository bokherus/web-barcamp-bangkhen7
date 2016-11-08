# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Session.create(
  [
    # Session 1 (10.40 - 11.05)
    {
      name: "How to become a Javascript ninja",
      speaker: "Thai Pangsakulyanont",
      start_time: Time.zone.local(2016,11,13,10,40),
      end_time: Time.zone.local(2016,11,13,11,05),
      location: "17201"
    },
    {
      name: "Life of professional gamer",
      speaker: "Tent",
      start_time: Time.zone.local(2016,11,13,10,40),
      end_time: Time.zone.local(2016,11,13,11,05),
      location: "17301"
    },
    {
      name: "Nightlife unlimited",
      speaker: "Boss",
      start_time: Time.zone.local(2016,11,13,10,40),
      end_time: Time.zone.local(2016,11,13,11,05),
      location: "17302"
    },
    {
      name: "How I became slow like a turtle",
      speaker: "Not",
      start_time: Time.zone.local(2016,11,13,10,40),
      end_time: Time.zone.local(2016,11,13,11,05),
      location: "17303"
    },
    {
      name: "Battlefield 1 remaster review",
      speaker: "Earth",
      start_time: Time.zone.local(2016,11,13,10,40),
      end_time: Time.zone.local(2016,11,13,11,05),
      location: "17401"
    },
    {
      name: "How avoid being drunk",
      speaker: "Kanoon",
      start_time: Time.zone.local(2016,11,13,10,40),
      end_time: Time.zone.local(2016,11,13,11,05),
      location: "17402"
    },
    # Session 2 (11.10 - 11.35)
    {
      name: "What is ipv6 and how to use it",
      speaker: "Nonae",
      start_time: Time.zone.local(2016,11,13,11,10),
      end_time: Time.zone.local(2016,11,13,11,35),
      location: "17201"
    },
    {
      name: "My car tires got locked",
      speaker: "Net",
      start_time: Time.zone.local(2016,11,13,11,10),
      end_time: Time.zone.local(2016,11,13,11,35),
      location: "17301"
    },
    {
      name: "Google's deepmind",
      speaker: "Warat",
      start_time: Time.zone.local(2016,11,13,11,10),
      end_time: Time.zone.local(2016,11,13,11,35),
      location: "17302"
    },
    {
      name: "Why Cocacola could be harmful",
      speaker: "Anonymous",
      start_time: Time.zone.local(2016,11,13,11,10),
      end_time: Time.zone.local(2016,11,13,11,35),
      location: "17303"
    },
    {
      name: "Work life balance",
      speaker: "Zen master",
      start_time: Time.zone.local(2016,11,13,11,10),
      end_time: Time.zone.local(2016,11,13,11,35),
      location: "17401"
    },
    {
      name: "Getting start with touch typing",
      speaker: "Keyboard god",
      start_time: Time.zone.local(2016,11,13,11,10),
      end_time: Time.zone.local(2016,11,13,11,35),
      location: "17402"
    },
    # Session 3 (11.40 - 12.05)
    {
      name: "Future of Esport industry",
      speaker: "Tan",
      start_time: Time.zone.local(2016,11,13,11,40),
      end_time: Time.zone.local(2016,11,13,12,05),
      location: "17201"
    },
    {
      name: "Guide to master excretion",
      speaker: "Not",
      start_time: Time.zone.local(2016,11,13,11,40),
      end_time: Time.zone.local(2016,11,13,12,05),
      location: "17301"
    },
    {
      name: "Creative water baloons",
      speaker: "Idiot",
      start_time: Time.zone.local(2016,11,13,11,40),
      end_time: Time.zone.local(2016,11,13,12,05),
      location: "17302"
    },
    {
      name: "How to raise your MMR",
      speaker: "Kanoon",
      start_time: Time.zone.local(2016,11,13,11,40),
      end_time: Time.zone.local(2016,11,13,12,05),
      location: "17303"
    },
    {
      name: "Suriving the friendzone 101",
      speaker: "Tle",
      start_time: Time.zone.local(2016,11,13,11,40),
      end_time: Time.zone.local(2016,11,13,12,05),
      location: "17401"
    },
    {
      name: "World war II",
      speaker: "Frank",
      start_time: Time.zone.local(2016,11,13,11,40),
      end_time: Time.zone.local(2016,11,13,12,05),
      location: "17402"
    },
    # Session 4 (13.00 - 13.25)
    {
      name: "How to have fun",
      speaker: "How to basic",
      start_time: Time.zone.local(2016,11,13,13,00),
      end_time: Time.zone.local(2016,11,13,13,25),
      location: "17201"
    },
    {
      name: "Benefit of sleeping",
      speaker: "Tan",
      start_time: Time.zone.local(2016,11,13,13,00),
      end_time: Time.zone.local(2016,11,13,13,25),
      location: "17301"
    },
    {
      name: "How to talk nonsense",
      speaker: "Trong",
      start_time: Time.zone.local(2016,11,13,13,00),
      end_time: Time.zone.local(2016,11,13,13,25),
      location: "17302"
    },
    {
      name: "Read nothing get everything",
      speaker: "Tor",
      start_time: Time.zone.local(2016,11,13,13,00),
      end_time: Time.zone.local(2016,11,13,13,25),
      location: "17303"
    },
    {
      name: "Art of parking in KU",
      speaker: "Net",
      start_time: Time.zone.local(2016,11,13,13,00),
      end_time: Time.zone.local(2016,11,13,13,25),
      location: "17401"
    },
    {
      name: "DJ track recommendation",
      speaker: "Boss",
      start_time: Time.zone.local(2016,11,13,13,00),
      end_time: Time.zone.local(2016,11,13,13,25),
      location: "17402"
    },
    # Session 5 (13.30 - 13.55)
    {
      name: "Back to 25 in Hearthstone",
      speaker: "Trong",
      start_time: Time.zone.local(2016,11,13,13,30),
      end_time: Time.zone.local(2016,11,13,13,55),
      location: "17201"
    },
    {
      name: "How to mai klua meer (Mheemhee edition)",
      speaker: "Mhee",
      start_time: Time.zone.local(2016,11,13,13,30),
      end_time: Time.zone.local(2016,11,13,13,55),
      location: "17301"
    },
    {
      name: "How to walk on water",
      speaker: "Mild",
      start_time: Time.zone.local(2016,11,13,13,30),
      end_time: Time.zone.local(2016,11,13,13,55),
      location: "17302"
    },
    {
      name: "Piano 101",
      speaker: "Net",
      start_time: Time.zone.local(2016,11,13,13,30),
      end_time: Time.zone.local(2016,11,13,13,55),
      location: "17303"
    },
    {
      name: "Create responsive website in 10 minutes",
      speaker: "Web developer god",
      start_time: Time.zone.local(2016,11,13,13,30),
      end_time: Time.zone.local(2016,11,13,13,55),
      location: "17401"
    },
    {
      name: "Science of meditation",
      speaker: "Zen master",
      start_time: Time.zone.local(2016,11,13,13,30),
      end_time: Time.zone.local(2016,11,13,13,55),
      location: "17402"
    },
    # Session 6 (14.00 - 14.25)
    {
      name: "String theory",
      speaker: "Albert Einstein",
      start_time: Time.zone.local(2016,11,13,14,00),
      end_time: Time.zone.local(2016,11,13,14,25),
      location: "17201"
    },
    {
      name: "Object oriented programming",
      speaker: "Warat",
      start_time: Time.zone.local(2016,11,13,14,00),
      end_time: Time.zone.local(2016,11,13,14,25),
      location: "17301"
    },
    {
      name: "Internship in Germany",
      speaker: "P'Nueng",
      start_time: Time.zone.local(2016,11,13,14,00),
      end_time: Time.zone.local(2016,11,13,14,25),
      location: "17302"
    },
    {
      name: "Glazziq",
      speaker: "P'Dan",
      start_time: Time.zone.local(2016,11,13,14,00),
      end_time: Time.zone.local(2016,11,13,14,25),
      location: "17303"
    },
    {
      name: "Music composition 101",
      speaker: "Mozart",
      start_time: Time.zone.local(2016,11,13,14,00),
      end_time: Time.zone.local(2016,11,13,14,25),
      location: "17401"
    },
    {
      name: "Overwatch",
      speaker: "Jub",
      start_time: Time.zone.local(2016,11,13,14,00),
      end_time: Time.zone.local(2016,11,13,14,25),
      location: "17402"
    },
    # Session 7 (14.30 - 14.55)
    {
      name: "Call of duty remastered",
      speaker: "Earth",
      start_time: Time.zone.local(2016,11,13,14,30),
      end_time: Time.zone.local(2016,11,13,14,55),
      location: "17201"
    },
    {
      name: "Psychology of lightsaber guy",
      speaker: "Trong",
      start_time: Time.zone.local(2016,11,13,14,30),
      end_time: Time.zone.local(2016,11,13,14,55),
      location: "17301"
    },
    {
      name: "Science of friendzone",
      speaker: "Tle",
      start_time: Time.zone.local(2016,11,13,14,30),
      end_time: Time.zone.local(2016,11,13,14,55),
      location: "17302"
    },
    {
      name: "Art of getting free meals",
      speaker: "Not",
      start_time: Time.zone.local(2016,11,13,14,30),
      end_time: Time.zone.local(2016,11,13,14,55),
      location: "17303"
    },
    {
      name: "Level up fast in dota2",
      speaker: "Kanoon",
      start_time: Time.zone.local(2016,11,13,14,30),
      end_time: Time.zone.local(2016,11,13,14,55),
      location: "17401"
    },
    {
      name: "DevOps",
      speaker: "P'Dan",
      start_time: Time.zone.local(2016,11,13,14,30),
      end_time: Time.zone.local(2016,11,13,14,55),
      location: "17402"
    },
    # Session 8 (15.20 - 15.45)
    {
      name: "How to have many boyfriends",
      speaker: "Taylor Swift",
      start_time: Time.zone.local(2016,11,13,15,20),
      end_time: Time.zone.local(2016,11,13,15,45),
      location: "17201"
    },
    {
      name: "Get easy goals in FIFA online",
      speaker: "Net",
      start_time: Time.zone.local(2016,11,13,15,20),
      end_time: Time.zone.local(2016,11,13,15,45),
      location: "17301"
    },
    {
      name: "Camping on Mount Everest",
      speaker: "Anima S.",
      start_time: Time.zone.local(2016,11,13,15,20),
      end_time: Time.zone.local(2016,11,13,15,45),
      location: "17302"
    },
    {
      name: "Surviving in Sahara desert",
      speaker: "Ross'edeen",
      start_time: Time.zone.local(2016,11,13,15,20),
      end_time: Time.zone.local(2016,11,13,15,45),
      location: "17303"
    },
    {
      name: "Journey to the moon",
      speaker: "Armstrong",
      start_time: Time.zone.local(2016,11,13,15,20),
      end_time: Time.zone.local(2016,11,13,15,45),
      location: "17401"
    },
    {
      name: "Apple fell on my head",
      speaker: "Newton",
      start_time: Time.zone.local(2016,11,13,15,20),
      end_time: Time.zone.local(2016,11,13,15,45),
      location: "17402"
    },
    # Session 9 (15.50 - 16.15)
    {
      name: "Founding Apple Inc.",
      speaker: "Steve Job",
      start_time: Time.zone.local(2016,11,13,15,50),
      end_time: Time.zone.local(2016,11,13,16,15),
      location: "17201"
    },
    {
      name: "Investing 101",
      speaker: "Warren",
      start_time: Time.zone.local(2016,11,13,15,50),
      end_time: Time.zone.local(2016,11,13,16,15),
      location: "17301"
    },
    {
      name: "Get better in football",
      speaker: "Messi",
      start_time: Time.zone.local(2016,11,13,15,50),
      end_time: Time.zone.local(2016,11,13,16,15),
      location: "17302"
    },
    {
      name: "Computer hardware",
      speaker: "Tor",
      start_time: Time.zone.local(2016,11,13,15,50),
      end_time: Time.zone.local(2016,11,13,16,15),
      location: "17303"
    },
    {
      name: "Expert Systems",
      speaker: "Kanoon",
      start_time: Time.zone.local(2016,11,13,15,50),
      end_time: Time.zone.local(2016,11,13,16,15),
      location: "17401"
    },
    {
      name: "Machine learning",
      speaker: "Warat",
      start_time: Time.zone.local(2016,11,13,15,50),
      end_time: Time.zone.local(2016,11,13,16,15),
      location: "17402"
    },
    # Session 10 (16.20 - 16.45)
    {
      name: "Ruby on Rails",
      speaker: "Peak",
      start_time: Time.zone.local(2016,11,13,16,20),
      end_time: Time.zone.local(2016,11,13,16,45),
      location: "17201"
    },
    {
      name: "Internship at Wongnai",
      speaker: "P'Manasawin",
      start_time: Time.zone.local(2016,11,13,16,20),
      end_time: Time.zone.local(2016,11,13,16,45),
      location: "17301"
    },
    {
      name: "Life as Software & Knowledge engineering student",
      speaker: "Boss",
      start_time: Time.zone.local(2016,11,13,16,20),
      end_time: Time.zone.local(2016,11,13,16,45),
      location: "17302"
    },
    {
      name: "Basic Photography",
      speaker: "Third",
      start_time: Time.zone.local(2016,11,13,16,20),
      end_time: Time.zone.local(2016,11,13,16,45),
      location: "17303"
    },
    {
      name: "Guide to driving an automatic transmission car",
      speaker: "Tor",
      start_time: Time.zone.local(2016,11,13,16,20),
      end_time: Time.zone.local(2016,11,13,16,45),
      location: "17401"
    },
    {
      name: "It's a secret",
      speaker: "Secret",
      start_time: Time.zone.local(2016,11,13,16,20),
      end_time: Time.zone.local(2016,11,13,16,45),
      location: "17402"
    },
  ]
)
