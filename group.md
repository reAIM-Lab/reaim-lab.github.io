---
layout: article
title: Group
key: group
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .profile-container {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            margin: 20px;
        }

        .avatar-container {
            width: 225px;
            height: 225px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .avatar-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .profile-info {
            flex: 1;
            max-width: 1500px;
        }

        .profile-info p {
            margin: 0;
            font-size: 1em;
        }

        .profile-info .email {
            margin-bottom: 5px;
        }

        .profile-info .email span {
            font-family: monospace;
            font-size: 0.75em;
            background-color: #f0f0f0;
            padding: 2px 4px;
        }

        @media (max-width: 1200px) {
            .profile-info p {
                font-size: 1em;
            }
        }

        @media (max-width: 900px) {
            .profile-info p {
                font-size: 0.9em;
            }

            .profile-info .email {
                font-size: 0.9em;
            }
        }

        @media (max-width: 600px) {
            .profile-container {
                flex-direction: column;
                align-items: center;
                text-align: left;
            }

            .avatar-container {
                margin-right: 0;
                margin-bottom: 20px;
            }

            .profile-info p {
                font-size: 0.8em;
            }
        }
</style>




<h3>Principal Investigator</h3>

<div style="margin-top: 1.5em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/shalmali_headshot.jpg" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Shalmali Joshi, Ph.D.</p>
    <p class="email">
      <span>sj3261[at]cumc[dot]columbia[dot]edu</span> &bull; 
      <a href="{{ site.baseurl }}/shalmalijoshi.html" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?user=x5wW5WIAAAAJ" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Dr. Joshi is an Assistant Professor at Columbia University, Department of Biomedical Informatics where she leads the reAIM Lab. She works to advance Machine Learning (ML) and Artificial Intelligence (AI) methods with the goal of advancing clinical health and medicine for all. 
    </p>
  </div>
</div>


<h3>Postdoctoral Researchers</h3>

<div style="margin-top: 1.5em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/jiayu_headshot.jpg" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Jiayu Yao, Ph.D.</p>
    <p class="email">
      <span>jy3491[at]columbia[dot]edu</span> &bull; 
      <a href="https://yaojiayu0826.github.io/" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?user=WNoNASEAAAAJ&hl" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Jiayu is currently a postdoc at Columbia University Data Science Institute, advised by Prof. Shalmali Joshi and Dr. Soojin Park. Previously, she worked as a postdoc with Prof. Barbara Engelhardt at Gladstone Institutes and Stanford University. Before her postdoc, Jiayu obtaind her PhD at the Data to Actionable Knowledge (DtAK) Lab at Harvard University, advised by Prof. Finale Doshi-Velez. Her research focuses on identifying and tackling challenges along the machine learning pipeline -- from data preparation to model deployment -- with the goal of bridging the gap between machine learning methodology and clinical application. Specifically, her current research includes developing pipelines for data processing and exploration, developing models that are robust under real-life limitations (e.g. data heterogeneity, data scarcity and domain knowledge constraints), as well as developing quantitative and qualitative assessments of models for specific downstream desiderata (e.g. statistical power, human-interpretability). Prior to joining DtAK, Jiayu received her bachelor’s degree in applied math and computer science from Emory University, where she was advised with Prof. Joyce C Ho. 
    </p>
  </div>
</div>

<div style="margin-top: 3em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/vincent_headshot.png" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Vincent Jeanselme, Ph.D.</p>
    <p class="email">
      <span>vincent[dot]jeanselme[at]gmail[dot]com</span> &bull; 
      <a href="https://jeanselme.github.io/" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?user=CnN1SlcAAAAJ" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Vincent is currently a postdoctoral researcher at the MRC BSU at the University of Cambridge and will join the reAIM lab at Columbia University in the fall. His research interest lies in developing machine learning models to assist medical practitioners with a focus on reducing inequalities in medical care access and delivery. He received his PhD at the University of Cambridge under the supervision of Dr. Jessica Barrett and Dr. Brian Tom, where he investigated how the interaction between patients and the healthcare system harms the application of machine learning models in real-world settings. Before his doctoral studies, Vincent received an engineering degree in computer science and a master’s degree in machine learning from the Ecole Nationale Supérieure d’Informatique et de Mathématiques Appliquées de Grenoble. Then, he worked as a research analyst at the AutonLab at Carnegie Mellon University where he developed machine learning models with a focus on medical applications such as hypotension prediction and haemorrhage detection.

    </p>
  </div>
</div>


<h3>Doctoral Students </h3>

<div style="margin-top: 1.5em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/ysc_headshot_2024.jpg" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Young Sang Choi, M.S.</p>
    <p class="email">
      <span>young[dot]sang[dot]choi[at]columbia[dot]edu</span> &bull; 
      <a href="https://youngsangchoi.github.io/" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?hl=en&user=cX-zhzAAAAAJ" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Young is a doctoral student in Biomedical Informatics advised by Dr. Shalmali Joshi and <a href="https://pierreelias.github.io/Elias_Bio.html" style="text-decoration: none; color: #0077C8;">Dr. Pierre Elias</a>. His research focuses on the intersection between multimodal learning and clinical informatics. Previously, he was a researcher at the National Cancer Center-Korea, received a master's degree under the supervision of Dr. Deborah Estrin in Information Systems with a concentration in Health Tech at Cornell Tech, and graduated from New York University with a bachelor's degree in Mathematics. He can be found drinking copious amounts of coffee during his free time. 
    </p>
  </div>
</div>

<div style="margin-top: 3em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/apara_headshot.jpg" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Aparajita Kashyap, M.A.</p>
    <p class="email">
      <span>ak4885[at]cumc[dot]columbia[dot]edu</span> &bull; 
      <a href="https://aparakashyap.github.io/" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?user=0g2q-j8AAAAJ&hl=en" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Aparajita (Apara) Kashyap is a PhD student at Columbia University in the Department of Biomedical Informatics. Her research focuses on building fair and equitable models for use in healthcare settings, with a focus on mental health disorders and reproductive health disorders. At Columbia, Aparajita is coadvised by Shalmali Joshi and <a href="https://people.dbmi.columbia.edu/noemie/" style="text-decoration: none; color: #0077C8;">Noémie Elhadad</a>. Prior to her work at Columbia, Aparajita studied Biophysics at Johns Hopkins University.
    </p>
  </div>
</div>

<div style="margin-top: 3em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/yuta_headshot.jpg" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Yuta Kobayashi, M.S.</p>
    <p class="email">
      <span>yk3043[at]cumc[dot]columbia[dot]edu</span> &bull; 
      <a href="https://ykobaya9.github.io/" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?user=ePjRZKcAAAAJ" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Yuta is a doctoral student in Biomedical Informatics advised by Dr. Shalmali Joshi. He received his bachelor's degree in Computer Science and Biomedical Engineering and a master's degree in Computer Science at Johns Hopkins University, where he was advised by Dr. Archana Venkataraman. Currently, his research focuses on utilizing tools from causal inference and reinforcement learning to detect and mitigate algorithmic bias in AI models for healthcare.
    </p>
  </div>
</div>

<div style="margin-top: 3em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/zilin_headshot.jpg" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Zilin Jing, B.Sc.</p>
    <p class="email">
      <span>zj2398[at]columbia[dot]edu</span>  &bull; 
      <a href="https://zilinjing.github.io/" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="https://scholar.google.com/citations?user=q7XpLa4AAAAJ" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
      <!-- &bull;  -->
      <!-- <a href="" style="text-decoration: none; color: #0077C8;">Personal Website</a> &bull; 
      <a href="" style="text-decoration: none; color: #0077C8;">Google Scholar</a> -->
    </p>
    <p>
      Zilin is a doctoral student in Computer Science advised by Dr. Shalmali Joshi. He received his bachelor degree in Computer Science and Engineering at The Chinese University of Hong Kong, Shenzhen under the supervision of Prof. Shuang Li and Prof. Hongyuan Zha and was an international visiting student at Yale University through Y-VISP. His research interest is in machine learning for healthcare, causal inference and reinforcement learning.
    </p>
  </div>
</div>

<h3>Master's and Undergraduate Researchers</h3>

<div style="margin-top: 1.5em;"></div>

<div class="profile-container">
  <div class="avatar-container">
    <img src="{{ "/assets/images/kevin_headshot.png" | relative_url }}" alt="Avatar">
  </div>
  <div class="profile-info">
    <p style="font-size: 1.17em; font-weight: bold; margin: 0;">Kevin Zhang</p>
    <p class="email">
      <span>kyz2005[at]columbia[dot]edu</span> &bull; 
      <a href="https://scholar.google.com/citations?user=VGvLE4oAAAAJ&hl=en" style="text-decoration: none; color: #0077C8;">Google Scholar</a>
    </p>
    <p>
      Kevin is an undergraduate student at Columbia University, majoring in Computer Science and Mathematics. His work centers on causality-driven machine learning and graphical models, aiming to improve interpretability and fairness. Beyond research, he is an active member of the Science Olympiad team, where he helps organize the Fermi questions event.
    </p>
  </div>
</div>

<h3>Lab Alumni</h3>

<ul>
<li><b>Xinghe (Ziggy) Chen, M.S.</b>, Master's Thesis (CS), 2024.</li>
<ul>
<li>First position: Doctoral program at the College of Computing and Data Science (CCDS) at Nanyang Technological University (NTU).</li>
</ul>

<li><b>Haoqing (Terese) Wang, M.S.</b>, Masters Research (CS), 2024.</li>
<ul>
<li>First position: Doctoral program in Biomedical Engineering at the University of Southern California (USC).</li>
</ul>
