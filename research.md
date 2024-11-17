---
layout: article
title: Research
key: research
---


<style>
  .publication {
    display: flex;
    margin-bottom: 30px;
  }

  .publication img {
    width: 500px;
    margin-right: 20px;
    border-radius: 10px;
  }

  .publication .text {
    flex: 1;
  }

  @media (max-width: 800px) {
    .publication {
      flex-direction: column;
    }

    .publication img {
      margin-right: 0;
      margin-bottom: 10px;
      border-radius: 10px;
    }
  }
</style>

<h3>Adaptive AI systems that address systematic biases in health and medicine observational data</h3>

AI systems and ML models learned from health and medicine data can be unreliable due to biases in training data. Enabling systems that generalize to out-of-distribution data requires adaptive AI approaches where models can reason about their uncertainty and improve predictions. Even tasks like evaluating model performance on out-of-distribution data can be non-trivial under severe shifts. When used to provide insights, either for clinical operations or for scientific inference, models that cannot generalize can provide misleading insights and ultimately slow down progress. We're enabling new AI systems that are adaptive and overcome biased practices of observational health and medicine data<br>

<div class="publication">
  <!--img src="assets/images/joshi_aaai_2024.png" alt="Publication Image 1" /-->
  <div class="text">
    <a href="https://openreview.net/pdf?id=uuQQwrjMzb" target="_blank"><strong>Adaptive Labeling for Efficient Out-of-distribution Model Evaluation</strong></a><br>
    <strong>Daksh Mittal, Yuanzhe Ma, <span style="color: #003087;">Shalmali Joshi</span>, and Hongseok Namkoong.</strong><br>
    <i>Neural Information Processing Systems (NeurIPS) 2024</i><br>
  </div>
</div>


<h3>New capabilities for high-dimensional health and medicine data</h3>

We are developing new models for scalably using EHR data for meaningful clinical tasks and identifying new methods for evaluation. Our work involves models being developed in-house as well as in collaboration with other clinical collaborators and healthcare institutions. We use deep learning, reinforcement learning, information theory, and probabilistic modeling to develop new methods.<br>

<div class="publication">
  <div class="text">
    <a href="https://openreview.net/pdf?id=sMiSQP8zmr" target="_blank">
      <strong>Does multimodality help in deep learning-based structural heart disease detection?</strong>
    </a><br>
    <strong><span style="color: #003087;">Young Sang Choi</span>, <span style="color: #003087;">Shalmali Joshi</span>, Linyuan Jing, and Pierre Elias</strong><br>
    <i>Medical Imaging with Deep Learning (MIDL) 2024 (Short Paper Track)</i><br>
  </div>
</div>

<h3>New computational methods to quantify and mitigate inequities in health and medicine</h3>

AI and ML systems can be used to quantify biases in existing health and medicine observational data, with the goal of ultimately overcoming them using better AI systems. We approach the problem of algorithmic inequities through characterizing the entire data-generating pipeline, as opposed to myopically capturing model performance, and designing targeted bias mitigation strategies. We believe this approach is a better path that ties algorithmic fairness and inequity to broader challenges of disparities in health and medicine.<br>

<div class="publication">
  <div class="text">
    <a href="https://www.medrxiv.org/content/10.1101/2024.07.05.24310013v1" target="_blank">
      <strong>Machine Learning is More Accurate and Biased than Risk Scoring Tools in the Prediction of Postoperative Atrial Fibrillation After Cardiac Surgery</strong>
    </a><br>
    <strong>Joyce C. Ho, <span style="color: #003087;">Shalmali Joshi</span>, Eduardo Valverde, Kathryn Wood, Kendra J. Grubb, Miguel A. Leal, and Vicki Stover Hertzberg</strong><br>
    <i>medRxiv preprint</i><br>
  </div>
</div>

<div class="publication">
  <div class="text">
    <a href="https://proceedings.mlr.press/v202/zhang23ai/zhang23ai.pdf" target="_blank">
      <strong>"Why did the model fail?": Attributing model performance changes to distribution shifts</strong>
    </a><br>
    <strong>Haoran Zhang, Harvineet Singh, Marzyeh Ghassemi, and <span style="color: #003087;">Shalmali Joshi</span></strong><br>
    <i>International Conference on Machine Learning (ICML) 2023</i><br>
  </div>
</div>