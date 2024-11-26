import "../stylesheets/blogMain.css"

import BlogDate from '../components/BlogDate'
import BlogTitle from '../components/BlogTitle'
import BlogBrief from '../components/BlogBrief'
import BlogTable from '../components/BlogTable'
import BlogText from '../components/BlogText'
import BlogSubtitle from '../components/BlogSubtitle'
import BlogList from '../components/BlogList'
import BlogSubsubtitle from '../components/BlogSubsubtitle'

function Food2() {
    return (
        <div className="blog">
          <BlogDate date={25} month="November" year={2024}/> {/* <BlogDate/> */}
          <BlogTitle title="Diet Plan in Pregnancy"></BlogTitle>
          
          {/* <BlogBrief brief="Lorem Ipsum okay. This is a one-liner, lorem ipsum, about the title."></BlogBrief> */}
          <BlogText text="As you probably know, your body goes through lots of physical and hormonal changes during pregnancy. To fuel yourself and your growing baby, you’ll need to make great food choices from a variety of sources. Eating a healthy, balanced diet will help you feel good and provide everything you and your baby need. The food you eat is your baby’s main source of nourishment, so it’s critical to get all of the nutrients you need. The good thing? All of these nutrition guidelines aren’t that hard to follow and provide some delicious options. Even with cravings (hot sauce on peanut butter, anyone?) you can craft up a healthy menu in no time."/>
          <BlogText text="Wondering, what to eat during pregnancy. Below mentioned is the pregnancy food list that has all the necessary nutrients needed for your baby's proper growth."/>
    
          <BlogSubtitle subtitle="Indian Diet Chart And Meal Plan For Pregnancy"/>
          <BlogTable table={[
                  ["Week Days", "Pre Breakfast Snack", "Morning Breakfast", "Mid Morning Snack", "Lunch", "Evening", "Snack", "Dinner"], 
                  ["Day 1",	"8-12 pieces of dry fruits including cashew nuts, almonds, and raisins", "Moongdal chilla-3 + pudina/coconut chutney-2 tsp", "Blueberry shake (1 cup)", "1.5 cup Mutton biryani + Cucumber onion Raita (½ cup)", "Sweet potato salad (cooked with 200 gms of sweet potato, 1 pinch of chat masala, and 1 tsp lemon juice) +  light tea (1 cup)", "Wheat dosa 3 + ½ cup bitter gourd sabji"], 
                  ["Day 2",	"Homemade fruit juice with strawberries, pomegranate, guava, or oranges (1 glass)",	"Wheat dosa-4 + Tomato sabji (½ cup)", "Vegetable soup made with brocolli and garlic (1 bowl)", "1.5 cup rice + 1 piece of chicken + 1 cup broccoli sabji", "Mixed fruit salad made of mangoes, bananas, and berries of your choice (1 medium-sized plate)", "Moongdal chilla-3 + pudina/coconut chutney-2 tsp"], 
                  ["Day 3", "Banana milkshake (1 glass)", "Veggie-rich sevai or upma (1 cup) + 2 medium-sized parathas", "Kaddu ka soup or pumpkin soup (1 bowl)", "1.5 cup Mutton biryani + Cucumber onion Raita (½ cup)", "10-14 pieces of dry fruits", "Multigrain toast (2 in no.) with two sunny side up eggs"],
                  ["Day 4", "Carrot juice (1 glass)", "Oatmeal (1 cup) + 2 boiled eggs", "Banana milkshake (1 glass)", "1.5 cup rice, 1 piece mutton + 1 bowl masoor daal", "Mixed fruit salad made of mangoes, bananas, and berries of your choice (1 medium-sized plate)", "Veggie-rich poha (1 cup) + 2 moong dal chillas"],
                  ["Day 5", "1 plain glass of milk", "Veggie-rich poha (1 cup) + 2 moong dal chillas", "Tamatar or tomato soup (1 bowl)", "1.5 cup chicken biryani + cucumber onion raita (½ cup)", "Vegetable salad (1 plate) made with carrots, cucumber, and onions", "Multigrain toast (2 in no.) with two sunny side up eggs"],
                  ["Day 6", "Banana milkshake (1 glass)", "Oatmeal (1 cup) + 2 boiled eggs", "Kaddu or pumpkin soup (1 bowl)", "1.5 cup rice, 1 piece mutton + 1 bowl masoor daal", "10-14 pieces of dry fruits including cashew nuts, almonds, and raisins", "Wheat dosa-4 + Tomato sabji (½ cup)"],
                  ["Day 7", "1 plain glass of milk", "Veggie-rich sevai or upma (1 cup) + 2 medium-sized parathas", "Peach milkshake (1 glass)", "1.5 cup vegetable khichdi + 1 piece chicken + 1 small bowl of dahi", "1 medium-sized avocado with 1 spoon of peanut butter", "Veggie-rich poha (1 cup) + 2 moong dal chillas"],
                ]}/>
          
          <BlogSubtitle subtitle="Foods And Beverages To Eat During Pregnancy"/>
          <BlogList type="ordered" items={[
                      <><strong>Dairy Products:</strong> Dairy products are rich in various nutrients like calcium and vitamins that support the baby’s development.</>,
                      <><strong>Legumes:</strong> Legumes are rich in plant-based nutrients providing protein, fibre, iron, folate, and calcium, all of which are needed more during pregnancy.</>,
                      <><strong>Sweet Potatoes:</strong> Sweet potatoes are high in a vitamin called beta carotene, essential for healthy fetal development.</>,
                      <><strong>Salmon:</strong> Salmon is rich in an omega-3 fatty acid called docosahexaenoic acid (DHA), which is deficient in pregnancy and, therefore, needs to be supplemented.</>,
                      <><strong>Eggs:</strong> Eggs are an excellent source of protein. They provide amino acids that the baby needs for development. Additionally, they contain more than a dozen beneficial vitamins and minerals, including choline.</>,
                      <><strong>Broccoli and dark, leafy greens:</strong> Dark, leafy greens like broccoli are rich in vitamins A, C, B6, K, folate, and antioxidants. So, they ensure a good haemoglobin supply, promote healthy bones, and prevent skin problems.</>,
                      <><strong>Lean meat and proteins:</strong> Lean meat is an excellent source of good-quality protein, which is beneficial for health during pregnancy.</>,
                      <><strong>Berries:</strong> Berries contain a good amount of water, healthy carbohydrates, vitamin C, and fibres. In addition, they may help increase your nutrient and water intake.</>,
                      <><strong>Whole grains:</strong> Whole grains are rich in minerals and vitamin B that the growing fetus needs to develop in almost every part of its body.</>,
                      <><strong>Avocados:</strong> Avocados are high in many nutrients, including vitamin C, folate, and magnesium, all of which play a critical role in the baby's development.</>,
                      <><strong>Dry fruits:</strong> Dry fruits are high in calcium, potassium, and zinc. Being rich in fibre, they help prevent constipation in pregnancy.</>,
                      <><strong>Fish liver oil:</strong> Fish liver oils are rich in omega-3 fatty acids, the healthiest forms of fat. They reduce the chances of preterm delivery.</>,
                      <><strong>Water:</strong> Drinking at least 8-11 glasses of water daily during pregnancy is essential. It helps in better digestion and maintains the protective fluid called amniotic fluid around the fetus.</>,
                    ]}/>
    
          <BlogSubtitle subtitle="Foods And Beverages To Eat During Pregnancy"/>
          <BlogList type="ordered" items={[
                      <><strong>High mercury fish:</strong> Consuming high mercury fish causes the substance (mercury) to accumulate in your bloodstream over a period of time. Excess mercury in the bloodstream could damage the baby’s developing nervous system and brain.</>,
                      <><strong>Undercooked or raw fish:</strong> Raw fish is more likely to contain parasites, bacteria, or microorganisms than fully cooked fish. You do not want to expose your baby to those!</>,
                      <><strong>Undercooked, raw, and processed meat:</strong> Processed meat is likely to contain listeria bacteria which can cause food poisoning and vomiting in pregnant females. Raw and undercooked meat is also likely to carry microorganisms, including bacteria that can give rise to sickness.</>,
                      <><strong>Raw eggs:</strong> Raw eggs should be avoided in pregnancy as those can be host to disease-causing bacteria called salmonella, which can cause food poisoning, vomiting, and diarrhoea.</>,
                      <><strong>Organ meat:</strong> Organ meat contains vitamin A, excess of which can cause congenital malformations in the baby and even miscarriage, especially in the first trimester of pregnancy.</>,
                      <><strong>Caffeine:</strong> Caffeine is a stimulant that tends to increase your heart rate and blood pressure, both of which are detrimental in pregnancy. Also, caffeine can cross the placenta, the barrier between you and your baby.</>,
                      <><strong>Raw sprouts:</strong> Raw sprouts flourish in warm and humid conditions, which are ideal for the growth of bacteria (like Salmonella and E. coli). So, consuming raw sprouts can make you sick.</>,
                      <><strong>Unwashed produce:</strong> Consuming unwashed or contaminated food products in pregnancy can expose you to a harmful parasite called Toxoplasma gondii, which is abundant in undercooked meat and unwashed vegetables.</>,
                      <><strong>Unpasteurized milk, cheese, and fruit juice:</strong> Raw, unpasteurized milk may contain bacteria like E.coli, Listeria, and Campylobacter jejuni, which can give rise to foodborne illnesses.</>,
                      <><strong>Alcohol:</strong> Alcohol consumption in the first trimester of pregnancy can cause structural defects in the baby; that is, the baby may have abnormal facial features.</>,
                      <><strong>Processed junk foods:</strong> Consuming processed junk foods during pregnancy can increase the amount of a toxic substance called acrylamide in the mother's body, which is harmful to the baby. This Indian diet plan for pregnancy may or may not suit everyone. In case of food allergies and complications, we can plan a personalized diet chart This Indian diet plan for pregnancy may or may not suit everyone. In case of food allergies and complications, we can plan a personalized diet chart.</>,
                    ]}
          />
          
          <BlogSubtitle subtitle="Conclusion"/>
          <BlogText text="Eating a healthy, well-balanced diet during pregnancy is essential for the growing baby as it is just waiting to slurp up all those nutritious meals you consume. There are a whole lot of nutritious foods that you can eat to ensure your baby is safe and healthy. Follow the diet chart above and keep your gynaecologist informed about your eating choices so that they can guide you with additional supplements if needed. Enjoy a healthy, well-nourished pregnancy!"/>
    
        </div>
      );
}

export default Food2;