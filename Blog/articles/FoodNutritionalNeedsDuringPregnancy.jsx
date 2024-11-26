// import React, { useState } from 'react'
// import "./App.css"

import "../stylesheets/blogMain.css"

import BlogDate from '../components/BlogDate'
import BlogTitle from '../components/BlogTitle'
import BlogBrief from '../components/BlogBrief'
import BlogTable from '../components/BlogTable'
import BlogText from '../components/BlogText'
import BlogSubtitle from '../components/BlogSubtitle'
import BlogList from '../components/BlogList'
import BlogSubsubtitle from '../components/BlogSubsubtitle'

function Food1() {

  return (
    <div className="blog">
      <BlogDate date={29} month="November" year={2024}/> {/* <BlogDate/> */}
      <BlogTitle title="Nutritional Needs During Pregnancy"></BlogTitle>
      
      {/* <BlogBrief brief="Lorem Ipsum okay. This is a one-liner, lorem ipsum, about the title."></BlogBrief> */}
      <BlogText text="As you probably know, your body goes through lots of physical and hormonal changes during pregnancy. To fuel yourself and your growing baby, you’ll need to make great food choices from a variety of sources. Eating a healthy, balanced diet will help you feel good and provide everything you and your baby need. The food you eat is your baby’s main source of nourishment, so it’s critical to get all of the nutrients you need. The good thing? All of these nutrition guidelines aren’t that hard to follow and provide some delicious options. Even with cravings (hot sauce on peanut butter, anyone?) you can craft up a healthy menu in no time."/>

      <BlogSubtitle subtitle="Increased nutrients"/>
      <BlogText text="No surprise here: Your body has increased nutritional needs during pregnancy — you’re feeding a whole new person! Although the old adage of “eating for two” isn’t entirely correct, you do require more micronutrients and macronutrients to support you and your baby."/>
      <BlogList items={[
                  <><strong>Micronutrients</strong> are dietary components, such as vitamins and minerals, that are only required in relatively small amounts.</>,
                  <><strong>Macronutrients</strong> are nutrients that provide calories, or energy. We’re talking carbohydrates, proteins, and fats. You’ll need to eat more of each type of nutrient during pregnancy.</>
                ]}/>
      <BlogText text="Here are some general guidelines on a few important nutrients that will need to be adjusted based on your needs: "/>
      <BlogTable table={[
                  ["Nutrient", "Daily requirements for pregnant women"], 
                  ["calcium",	"1200 milligrams (mg)"], 
                  ["folate",	"600–800 micrograms (mcg)"], 
                  ["iron", "27 mg"],
                  ["protein",	"70–100 grams (g) per day, increasing each trimester"]
                ]}/>
      <BlogText text="Most pregnant people can meet these increased nutritional needs by choosing a diet that includes a variety of healthy foods such as: "/>
      <BlogList items={["protein", "complex carbohydrates", "healthy types of fat like omega-3s",	"vitamins and minerals"]}/>
      
      <BlogSubtitle subtitle="What and how much to eat"/>
      <BlogText text="Your goal? Eat a wide variety of foods to provide everything you and your baby needs. It’s not that different from a regular healthy eating plan — just amplified a bit. In fact, current guidance trusted Source is to continue to eat as you normally would in your first semester, then increase 350 calories daily in your second trimester and 450 calories daily in your third trimester as your baby grows. "/>
      <BlogText text="As often as you can, avoid overly processed junk foods. Chips and soda, for example, contain no nutritional value. You and your baby will benefit more from fresh fruits, vegetables, and lean proteins, such as chicken, fish, beans, or lentils. This doesn’t mean that you need to avoid all of your favourite foods during pregnancy. Just balance them with nutritious foods so that you don’t miss any important vitamins or minerals."/>

      <BlogSubsubtitle subsubtitle="Protein"/>
      <BlogText text="Protein is critical for ensuring the proper growth of baby’s tissues and organs, including the brain. It also helps with breast and uterine tissue growth during pregnancy. It even plays a role in your increasing blood supply, allowing more blood to be sent to your baby. Your protein needs increase during each trimester of pregnancy. Research suggests trusted Source that protein intake during pregnancy should be even higher than some current recommendations. It’s time to ramp up those shrimp fajitas, pork curries, jerk chicken, and salmon teriyaki. You’ll need to eat about 70 to 100 g trusted Source of protein a day, depending on your weight and which trimester you’re in. Talk to your doctor to see how much you specifically need."/>
      <BlogText text="Good sources of protein include: "/>
      <BlogList items={["lean beef and pork", "chicken", "salmon", "nuts", "peanut butter", "cottage cheese", "beans"]}/>
      
      <BlogSubsubtitle subsubtitle="Calcium"/>
      <BlogText text="Calcium helps build your baby’s bones and regulates your body’s use of fluids. It does a body good, right? Pregnant women need 1,000 mg of calcium trusted Source, ideally in two doses of 500 mg trusted Source, per day. You’ll likely need additional calcium to supplement regular prenatal vitamins. "/>
      <BlogText text="Good sources of calcium include: "/>
      <BlogList items={["milk", "yogurt", "cheese", "low-mercury fish and seafood, such as salmon, shrimp, catfish, and canned light tuna", "calcium-set tofu", "dark green, leafy vegetables"]}/>
      
      <BlogSubsubtitle subsubtitle="Folate"/>
      <BlogText text="Folate, also known as folic acid, plays an important part in reducing the risk of neural tube defects. These are major birth defects that affect the baby’s brain and spinal cord, such as spina bifida and anencephaly. "/>
      <BlogText text="When you’re pregnant, the American College of Obstetrics and Gynaecology (ACOG) recommends 600 to 800 mcg of folate. You can get folate from these foods:"/>
      <BlogList items={["liver", "nuts", "dried beans and lentils", "eggs", "nuts and peanut butter", "dark green, leafy vegetables"]}/>

      <BlogSubsubtitle subsubtitle="Iron"/>
      <BlogText text="Iron works with sodium, potassium, and water to increase blood flow. This helps ensure that enough oxygen is supplied to both you and your baby. "/>
      <BlogText text="You should be getting 27 mg of iron per day, preferably alongside some vitamin C to increase absorption. Good sources of this nutrient include:"/>
      <BlogList items={["dark green, leafy vegetables (noticing a trend with this one?)", "citrus fruits", "enriched breads or cereals", "lean beef and poultry", "eggs"]}/>
      
      <BlogSubsubtitle subsubtitle="Other Considerations"/>
      <BlogText text="Other nutrients are necessary to keep you thriving during your pregnancy like choline, salt, and B vitamins. Aside from eating well, it’s important to drink at least eight glasses of water each day and to take prenatal vitamins. It’s difficult to obtain sufficient amounts of certain nutrients, including folate, iron, and choline, from food alone. Make sure to speak with your doctor about which prenatal vitamins you should take."/>

      <BlogSubtitle subtitle="Food Fix: What to Eat When Pregnant"/>
      <BlogSubsubtitle subsubtitle="Cravings and food aversions"/>
      <BlogText text="During pregnancy, you may experience aversions to particular foods, meaning you won’t like the smell or taste. You may also have cravings for at least one type of food."/>

      <BlogText text={<b>Pregnancy Cravings</b>}/>
      <BlogText text="You might start aching for a donut, Chinese food, or a strange food combination like the classic pickles and ice cream. It’s unclear why women develop food cravings or aversions during pregnancy. However, researchers believe hormones play a role."/>
      <BlogText text="It’s fine to give in to these cravings sometimes, especially if you crave foods that are a part of a healthy diet. However, you should try to limit your intake of junk food and processed foods. There’s usually a tasty alternative that will be a better option. Craving some French fries? Oven-roasted sweet potato wedges can feel just as indulgent with lots of good nutrients."/>

      <BlogText text={<b>Pregnancy Aversions</b>}/> 
      <BlogText text="Food aversions, on the other hand, may only be problematic if they involve foods that are important for baby’s growth and development. Talk to your doctor if you have adverse reactions to foods you should be eating during pregnancy. Your doctor can suggest other foods or supplements to compensate for the lack of those nutrients in your diet."/>

      <BlogText text={<b>Pica</b>}/> 
      <BlogText text="Pica is a disorder that causes cravings for items that contain no nutritional value. Pregnant women with pica may want to eat clay, cigarette ashes, or starch, among other strange substances."/>
      <BlogText text="When a woman has pica during pregnancy, it may indicate a lack of a specific vitamin or mineral. It’s important to notify your doctor if you crave non-food items or have eaten non-food items. Eating such items can be dangerous for you and your baby."/>

      <BlogSubtitle subtitle="Healthy weight gain during pregnancy"/>
      <BlogText text="If you're concerned about weight gain, don't stress too much. Some weight gain is normal during pregnancy. The extra weight provides nourishment to the baby. Some of it is also stored for breastfeeding after the baby is born. Women gain an average of 25 to 35 pounds (lbs.) during pregnancy. <br/> It's normal to gain less weight if you start out with more weight or to gain more weight if you were underweight before pregnancy. You can speak with your doctor about the appropriate amount of weight for you to gain during your pregnancy. "/>
      <BlogText text="The chart below provides some general guidelines, though everyone is different. Recommended weight gain during pregnancy with one baby: "/>
      <BlogTable table={[["Starting weight", "Body mass index*","Suggested weight gain"], ["underweight","< 18.5","28 to 40 lbs."], ["average weight","18.5 to 24.9","25 to 35 lbs."], ["overweight","25 to 29.9","15 to 25 lbs."], ["obese", "> 30.0",	"11 to 20 lbs."]]}/>

      <BlogText text="*Body mass index (BMI) can be calculated using the following equation: weight (in pounds) / height (in inches)² × 703."/>
      <BlogText text="Don’t worry too much about the number on the scale. Instead of focusing on your weight, concentrate on eating a variety of nutritious foods. Healthy eating is incredibly important, and dieting to lose weight or prevent weight gain can be harmful to you and your baby."/>

      <BlogSubtitle subtitle="Healthy exercise"/>
      <BlogText text="Besides eating a nutrition-focused diet, exercising during pregnancy can help you manage your health and de-stress. Swimming and walking are good choices to get moving. Choose an activity (or a variety!) that you enjoy. Avoid any extreme sports or contact sports, such as rock climbing and basketball. Staying safe while getting your move on is ideal."/>
      <BlogText text="If you didn’t exercise before your pregnancy, start out slowly and don’t overdo it. Consider looking into some exercises or classes that focus specifically on pregnant people for extra support. It’s also important to drink plenty of water so that you don’t get dehydrated. Make sure to talk to your doctor before you start a new exercise routine."/>

      <BlogText text={<b>Takeaway</b>}/>
      <BlogText text="Make sure you’re eating a balanced and nutritious diet during your pregnancy so you and your growing baby can be as healthy as possible. Include whole, nourishing foods, and limit your intake of foods without good nutritional value like processed and fast foods."/>

      <BlogText text="Eat these: "/>
      <BlogList items={["protein with every meal and snack","whole grains", "five or more servings of fruits and vegetables per day", "dairy products or high calcium foods",	"foods with essential fats", "prenatal vitamins"]}/>

      <BlogText text="Avoid these: "/>
      <BlogList items={["alcohol","excessive caffeine", "raw meats and seafood", "high-mercury fish",	"uncooked processed meats", "unpasteurized dairy"]}/>

      <BlogText text="Let your healthcare team guide you in creating a specific, enjoyable, and achievable meal plan based on your age, weight, risk factors, and medical history. You’ve got this!"/>

    </div>
  );
}

export default Food1;
