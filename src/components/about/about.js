import React from 'react';
import styles from './about.module.css'


const About = () => {
    return ( <div className={styles.main}><h1><strong>What is COVID-19?</strong></h1>
    <div className={styles.what}>Coronavirus disease (COVID-19) is an infectious disease caused by
     a newly discovered coronavirus.Most people infected with the COVID-19 virus will experience mild 
     to moderate respiratory illness and recover without requiring special treatment.  Older people,
      and those with underlying medical problems like cardiovascular disease, diabetes, chronic
       respiratory disease, and cancer are more likely to develop serious illness.
<br/>
The best way to prevent and slow down transmission is be well informed about the COVID-19 virus,
 the disease it causes and how it spreads. Protect yourself and others from infection by washing
  your hands or using an alcohol based rub frequently and not touching your face. 
<br/>
The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when 
an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette
 (for example, by coughing into a flexed elbow).At this time, there are no specific vaccines or 
 treatments for COVID-19</div>

<div className={styles.prevention}><h1><strong> Prevention</strong></h1>
To prevent infection 
and to slow transmission of COVID-19, do the following:
<ul>
    <li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
    <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
    <li>Avoid touching your face.</li>
    <li>Cover your mouth and nose when coughing or sneezing.</li>
    <li>Stay home if you feel unwell.</li>
    <li>Refrain from smoking and other activities that weaken the lungs.</li>
    <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups
 of people.</li>
</ul>
</div>

<div className={styles.symptoms}>
<h1><strong> Symptoms</strong></h1>
    COVID-19 affects different people in different ways.
 Most infected people will develop mild to moderate illness and recover without hospitalization.
<br/>
<br/>
Most common symptoms:
<ul>
<li>fever.</li>
<li>dry cough.</li>
<li>tiredness.</li>
</ul>

Less common symptoms:
<ul>
<li>aches and pains.</li>
<li>sore throat.</li>
<li>diarrhoea.</li>
<li>conjunctivitis.</li>
<li>headache.</li>
<li>loss of taste or smell.</li>
<li>a rash on skin, or discolouration of fingers or toes.</li>
</ul>

Serious symptoms:

<ul>
<li>difficulty breathing or shortness of breath.</li>
<li>chest pain or pressure.</li>
<li>loss of speech or movement.</li>
</ul>
Seek immediate medical attention if you have serious symptoms.
  Always call before visiting your doctor or health facility. 

People with mild symptoms who are otherwise healthy should manage their symptoms at home. 

On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days. </div>
    </div>);
}
 
export default About;

//3f2b7f11012b4ed0b55d799605a87749