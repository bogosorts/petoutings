import mattDaschundImage from '../assets/Matt Train Daschund.png'
import mattBlackLabImage from '../assets/Matt W Black Lab.PNG'

export default function AboutPage() {
  return (
    <div id="about" className="pt-20 bg-sand-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 text-center mb-4">
            About Us
          </h1>
          <p className="text-center text-sand-600 text-lg">
            Meet the team behind Bay Pet Ventures
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-white border-t border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* Matt Section */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-900 mb-4">
                Matt
              </h2>
              <p className="text-sand-700 text-lg leading-relaxed mb-6">
                Matt grew up sitting and boarding dogs as a hobby, bringing over 12 years of hands-on experience working with dogs of all breeds and temperaments. His passion for canine care started early and has only grown stronger over the years. Matt has a natural ability to understand and connect with dogs, ensuring they feel safe, comfortable, and happy during their adventures. He's dedicated to providing the highest level of care and attention to every dog he works with.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={mattDaschundImage}
                    alt="Matt training with a Dachshund on the beach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={mattBlackLabImage}
                    alt="Matt playing with a black Labrador"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Charles Section */}
            <div className="border-t border-sand-200 pt-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-900 mb-4">
                Charles
              </h2>
              <p className="text-sand-700 text-lg leading-relaxed">
                Charles grew up on a ranch training and taking care of dogs. He has experience with high energy dogs like German Shepherds as well as large stubborn dogs like his current dog (hunting Plott hound). For some reason, he has always connected well with dogs (probably better than humans). He loves taking lots of pictures and videos of the dogs so feel free to ask him for them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

