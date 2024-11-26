import "../stylesheets/blogMain.css"

import BlogDate from '../components/BlogDate'
import BlogTitle from '../components/BlogTitle'
import BlogBrief from '../components/BlogBrief'
import BlogTable from '../components/BlogTable'
import BlogText from '../components/BlogText'
import BlogSubtitle from '../components/BlogSubtitle'
import BlogList from '../components/BlogList'
import BlogSubsubtitle from '../components/BlogSubsubtitle'

function MentalHealth2() {
    return (
        <div className="blog">
            <BlogDate date={25} month="October" year={2024}/>
            <BlogTitle title="Ultimate Guide to a Healthy Pregnancy "></BlogTitle>

            <BlogText text="Pregnancy is one of the most exciting and beautiful stages of your life. The very thought of holding the bundle of joy in your arms brings a warm smile to your face, and you just can’t wait to experience that magical moment."/>
            <BlogText text="However, it can be daunting, to say the least, as it is a critical phase of your life. It is natural to have multiple thoughts when you are about to welcome your little one, but it is equally important to concentrate on the positives. Enjoy each week of pregnancy, experience the changes physically and emotionally, and remember, your body is home to your precious one for the next few months, so make its stay as happy and peaceful as you can."/>
            <BlogText text="Remember, you are blessed to be your baby’s first companion. Enjoy the perks which are exclusive to you. Feel the baby’s first kicks and punches. They are going to give you sleepless nights for long."/>

            <BlogSubtitle subtitle="Anxiety is Harmful"/>
            <BlogText text="One of the key concerns I see in most of my patients and their families is about the method of delivery, which is understandable, but not always in our control.  Do not let the anxiety of result interfere with the precious moments of the journey. Since ages, vaginal birth has been celebrated as the natural and hence the desirable way to bring a child into this world. I do not deny the benefits associated with natural birth; however, medical science has advanced significantly, making cesarean a safe procedure. We have been able to save so many precious lives through timely surgical intervention which could have otherwise been fatal."/>
            <BlogText text="The point is here is not about caesarian or normal, the point I want to drive across is that do not think too much about it at least in the first two trimesters; focus rather on maintaining a healthy and happy schedule."/>

            <BlogSubsubtitle subsubtitle={<i>The mode of delivery is least important when compared to the first cry and the countless smiles. Remember that.</i>}/>
            <BlogText text="Every expecting mother is unique and so is her path to motherhood. Enjoy the experience and create memories that are going to last a lifetime. Let not worry subjugate your happiness. You cannot let your worries affect your baby. "/>
            <BlogText text="Your primary concern during this time should be to maintain health and fitness. Remain active during the pre-natal period and do moderate exercises which will help relax your pelvic muscle. These muscles come under great strain during pregnancy. Strong pelvic muscles will also ease the contractions. Breathing exercises improve blood circulation which will benefit you and your baby. It will also help you cope with the pain during the delivery."/>
            <BlogText text="The importance of a balanced diet cannot be stressed enough. Oily food will lead to unhealthy weight gain and may also result in gestational diabetes. Protein is important for fetal growth; however, excessive intake can have deleterious effects. Your doctor will prescribe all the required supplements. Talk to them if you feel that you need more in your diet. Check out a pregnancy diet chart."/>
            <BlogText text="Many mothers opt for analgesics, if the pain is too acute for them to bear. This is one of the options you can consider if you are concerned about your pain tolerance. Talk to your doctor if you want to know more about analgesia."/>
            <BlogText text="Follow your doctor, ask as many questions as you want. You will come across various sources offering advice, tips and guidance. Do not follow them blindly as your baby needs an expert and not uncertified opinions. Have faith!"/>
            <BlogText text="Your doctor will monitor you closely during your regular visits. Share any discomfort or concern you may have, with them. The doctor will advise you in case there is any complication, or if you need any special precaution.  Do not let any unnecessary negative thoughts mar your journey."/>
            <BlogText text="Feel prepared and empowered. Beautiful smiles are delivered from healthy moms and delightful thoughts."/>


        </div>
    );

}

export default MentalHealth2;