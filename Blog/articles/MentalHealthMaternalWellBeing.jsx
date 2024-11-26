import "../stylesheets/blogMain.css"

import BlogDate from '../components/BlogDate'
import BlogTitle from '../components/BlogTitle'
import BlogBrief from '../components/BlogBrief'
import BlogTable from '../components/BlogTable'
import BlogText from '../components/BlogText'
import BlogSubtitle from '../components/BlogSubtitle'
import BlogList from '../components/BlogList'
import BlogSubsubtitle from '../components/BlogSubsubtitle'

function MentalHealth1() {
    return (
        <div className="blog">
          <BlogDate date={25} month="October" year={2024}/>
          <BlogTitle title="Maternal Well-being: Mental Health During Pregnancy"></BlogTitle>
          
          <BlogText text="Worldwide about 10% of pregnant women and 13% of women who have just given birth experience a mental disorder, primarily depression. In developing countries this is even higher, i.e. 15.6% during pregnancy and 19.8% after child birth. In severe cases mothers’ suffering might be so severe that they may even commit suicide. In addition, the affected mothers cannot function properly. As a result, the children’s growth and development may be negatively affected as well. Maternal mental disorders are treatable. Effective interventions can be delivered even by well-trained non-specialist health providers."/>
          <BlogText text="The Department’s objectives regarding maternal mental health are:"/>
          <BlogList items={["To reinforce advocacy and provide global leadership for the mental health of the mothers;", "To provide support to the member states on evidence based, cost effective, and human rights oriented mental health and social care services in community-based settings for early identification and management of maternal mental disorders;", "To provide strategies for promotion of psychosocial well-being, prevention and promotion of mental disorders of mothers during pregnancy and after delivery;", "To support the integration of the programmes with maternal and child health initiatives, reproductive health programmes and mainstream them with gender sensitive, and equity and human rights oriented strategies of WHO;", "To strengthen information systems, evidence and research relevant to mental health of mothers.",]}/>
    
          <BlogSubtitle subtitle="Mental health of the mothers"/>
          <BlogText text="A recent meta-analysis showed that about 20 % of mothers in developing countries experience clinical depression after childbirth. This is much higher than the previous figures on prevalence coming mostly from high income countries. Suicide is an important cause of death among pregnant and post- partum women. Psychosis is much less common but may also lead to suicide and in some cases even harming the newborn. Depression causes enormous suffering and disability and reduced response to child’s need. Evidence indicates that treating the depression of mothers leads to improved growth and development of the newborn and reduces the likelihood of diarrhoea and malnutrition among them."/>
          <BlogText text="Globally maternal mental health problems are considered as a major public health challenge. Though maternal mortality still lies at the heart of maternal health indicators; for the post 2015 agenda for development goals, WHO is considering Universal Health Coverage (UHC) and proposing Healthy Life Expectancy (HLE) related indicators as well. This implies stronger focus on mental health conditions in the integrated delivery of services for maternal and child health. The need is not just felt in high income countries. In fact, some academic and public health institutions in low and middle income countries have already initiated integrated maternal mental health programmes. These have been low cost interventions with the involvement of non-specialized or community health providers. Impact has been demonstrated not only on mothers but also on growth and development of children."/>
    
          <BlogSubsubtitle subsubtitle="Who is at risk of these disorders?"/>
          <BlogText text="Virtually all women can develop mental disorders during pregnancy and in the first year after delivery, but poverty, migration, extreme stress, exposure to violence (domestic, sexual and gender-based), emergency and conflict situations, natural disasters, and low social support generally increase risks for specific disorders."/>
    
          <BlogSubsubtitle subsubtitle="Effects of maternal mental disorders after birth on the mother and the infant"/>
          <BlogText text="After the birth, the mother with depression suffers a lot and may fail to adequately eat, bathe or care for herself in other ways. This may increase the risks of ill health. The risk of suicide is also a consideration, and in psychotic illnesses, the risk of infanticide, though rare, must be taken into consideration."/>
          <BlogText text="Very young infants can be affected by and are highly sensitive to the environment and the quality of care, and are likely to be affected by mothers with mental disorders as well. Prolonged or severe mental illness hampers the mother-infant attachment, breastfeeding and infant care"/>
    
          <BlogSubsubtitle subsubtitle="What to do?"/>
          <BlogText text="Maternal mental health can be integrated into general health care including women’s health, maternal and child health care, reproductive health care and other relevant services."/>
          
          <BlogSubsubtitle subsubtitle="Identification and management of maternal mental disorders by non-specialized health providers"/>
          <BlogText text="The mental health Gap Intervention Guide provides guidelines about identification and management of mental disorders by non-specialized mental health providers including in pregnant and postpartum mothers"/>
    
        </div>
    );
}

export default MentalHealth1;