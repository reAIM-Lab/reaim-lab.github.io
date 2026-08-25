// Raw BibTeX for each publication, keyed by its citation key. Entries in
// publications.json opt in by setting "bibkey" to the matching key here.
//
// String.raw is load-bearing: a plain template literal would eat the
// backslashes in LaTeX escapes, turning No{\'e}mie into No{'e}mie and
// {\textasciicircum} into a tab character.
export const bibtex: Record<string, string> = {
	kobayashi2026positive: String.raw`@article{kobayashi2026positive,
  title={Positive-Unlabeled Preference Optimization For Chest X-ray Report Generation},
  author={Kobayashi, Yuta and Ramesh, Pradyun and Chaudhry, Muhammad Ahmed and Jeanselme, Vincent and Gichoya, Judy Wawira and Koyejo, Sanmi and Capaccione, Kathleen and Joshi, Shalmali},
  journal={arXiv preprint arXiv:2608.05341},
  year={2026}
}`,

	choi2026icymi: String.raw`@inproceedings{choi2026icymi,
  title={{ICYM}\${\textasciicircum}2\$I: The illusion of multimodal informativeness under missingness},
  author={Young Sang Choi and Vincent Jeanselme and Pierre Elias and Shalmali Joshi},
  booktitle={The Fourteenth International Conference on Learning Representations},
  year={2026},
  url={https://openreview.net/forum?id=jC7FK8Rf4s}
}`,

	jing2026one: String.raw`@article{jing2026one,
  title={One Loss to Rule Them All: Marked Time-to-Event for Structured EHR Foundation Models},
  author={Jing, Zilin and Jeanselme, Vincent and Kobayashi, Yuta and Lee, Simon A and Pang, Chao and Kashyap, Aparajita and Li, Yanwei and Jiang, Xinzhuo and Joshi, Shalmali},
  journal={arXiv preprint arXiv:2602.00541},
  year={2026}
}`,

	kashyap2026pipeline: String.raw`@inproceedings{kashyap2026pipeline,
  title={A pipeline for enabling path-specific causal fairness in observational health data},
  author={Kashyap, Aparajita and Matijevic, Sara and Elhadad, No{\'e}mie and Kushner, Steven A and Joshi, Shalmali},
  booktitle={The 2026 ACM Conference on Fairness, Accountability, and Transparency},
  pages={2952--2979},
  year={2026}
}`,

	zhang2025pathspecific: String.raw`@inproceedings{zhang2025pathspecific,
  title={Path-specific effects for pulse-oximetry guided decisions in critical care},
  author={Kevin Zhang and Yonghan Jung and Divyat Mahajan and Karthikeyan Shanmugam and Shalmali Joshi},
  booktitle={The Thirty-ninth Annual Conference on Neural Information Processing Systems},
  year={2025},
  url={https://openreview.net/forum?id=2XelsPmKV1}
}`,

	kobayashi2026learningtomeasure: String.raw`@inproceedings{kobayashi2026learningtomeasure,
  title={Learning-To-Measure: In-Context Active Feature Acquisition},
  author={Yuta Kobayashi and Zilin Jing and Jiayu Yao and Hongseok Namkoong and Shalmali Joshi},
  booktitle={Forty-third International Conference on Machine Learning},
  year={2026},
  url={https://openreview.net/forum?id=ZumBSRsRbE}
}`,

	kobayashi2025mind: String.raw`@article{kobayashi2025mind,
  title={Mind the data gap: Missingness Still Shapes Large Language Model Prognoses},
  author={Kobayashi, Yuta and Jeanselme, Vincent and Joshi, Shalmali},
  journal={arXiv preprint arXiv:2512.00479},
  year={2025}
}`,

	agrawal2025evaluation: String.raw`@article{agrawal2025evaluation,
  title={The evaluation illusion of large language models in medicine},
  author={Agrawal, Monica and Chen, Irene Y and Gulamali, Freya and Joshi, Shalmali},
  journal={npj Digital Medicine},
  volume={8},
  number={1},
  pages={600},
  year={2025},
  publisher={Nature Publishing Group UK London}
}`,

	pang2025fomoh: String.raw`@article{pang2025fomoh,
  title={FoMoH: A clinically meaningful foundation model evaluation for structured electronic health records},
  author={Pang, Chao and Jeanselme, Vincent and Choi, Young Sang and Jiang, Xinzhuo and Jing, Zilin and Kashyap, Aparajita and Kobayashi, Yuta and Li, Yanwei and Pollet, Florent and Natarajan, Karthik and others},
  journal={arXiv preprint arXiv:2505.16941},
  year={2025}
}`,

	"pmlr-v202-zhang23ai": String.raw`@inproceedings{pmlr-v202-zhang23ai,
  title={"{W}hy did the Model Fail?": Attributing Model Performance Changes to Distribution Shifts},
  author={Zhang, Haoran and Singh, Harvineet and Ghassemi, Marzyeh and Joshi, Shalmali},
  booktitle={Proceedings of the 40th International Conference on Machine Learning},
  pages={41550--41578},
  year={2023},
  editor={Krause, Andreas and Brunskill, Emma and Cho, Kyunghyun and Engelhardt, Barbara and Sabato, Sivan and Scarlett, Jonathan},
  volume={202},
  series={Proceedings of Machine Learning Research},
  month={23--29 Jul},
  publisher={PMLR},
  pdf={https://proceedings.mlr.press/v202/zhang23ai/zhang23ai.pdf},
  url={https://proceedings.mlr.press/v202/zhang23ai.html}
}`,

	joshi2025ai: String.raw`@article{joshi2025ai,
  title={AI as an intervention: improving clinical outcomes relies on a causal approach to AI development and validation},
  author={Joshi, Shalmali and Urteaga, I{\~n}igo and Van Amsterdam, Wouter AC and Hripcsak, George and Elias, Pierre and Recht, Benjamin and Elhadad, No{\'e}mie and Fackler, James and Sendak, Mark P and Wiens, Jenna and others},
  journal={Journal of the American Medical Informatics Association},
  volume={32},
  number={3},
  pages={589--594},
  year={2025},
  publisher={Oxford University Press}
}`,

	mittal2024adaptive: String.raw`@article{mittal2024adaptive,
  title={Adaptive labeling for efficient out-of-distribution model evaluation},
  author={Mittal, Daksh and Ma, Yuanzhe and Joshi, Shalmali and Namkoong, Hongseok},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={70981--71003},
  year={2024}
}`,

	ho2024machine: String.raw`@article{ho2024machine,
  title={Machine learning is more accurate and biased than risk scoring tools in the prediction of postoperative atrial fibrillation after cardiac surgery},
  author={Ho, Joyce C and Joshi, Shalmali and Valverde, Eduardo and Wood, Kathryn and Grubb, Kendra and Leal, Miguel and Hertzberg, Vicki Stover},
  journal={medRxiv},
  pages={2024--07},
  year={2024},
  publisher={Cold Spring Harbor Laboratory Press}
}`,

	joshi2024rise: String.raw`@misc{joshi2024rise,
  title={Rise of the machines: how machine learning will shape the field of rheumatology},
  author={Joshi, Shalmali and Liebowitz, Jason E},
  journal={Rheumatology},
  volume={63},
  number={9},
  pages={2319--2320},
  year={2024},
  publisher={Oxford University Press}
}`,

	finnerty2024prevalence: String.raw`@article{finnerty2024prevalence,
  title={Prevalence and incidence measures for schizophrenia among commercial health insurance and medicaid enrollees},
  author={Finnerty, Molly T and Khan, Atif and You, Kai and Wang, Rui and Gu, Gyojeong and Layman, Deborah and Chen, Qingxian and Elhadad, No{\'e}mie and Joshi, Shalmali and Appelbaum, Paul S and others},
  journal={Schizophrenia},
  volume={10},
  number={1},
  pages={68},
  year={2024},
  publisher={Nature Publishing Group UK London}
}`,

	choi2024does: String.raw`@inproceedings{choi2024does,
  title={Does Multimodality Help in Deep Learning-Based Structural Heart Disease Detection?},
  author={Young Sang Choi and Shalmali Joshi and Linyuan Jing and Pierre Elias},
  booktitle={Medical Imaging with Deep Learning},
  year={2024},
  url={https://openreview.net/forum?id=sMiSQP8zmr}
}`,

	mccradden2023normative: String.raw`@article{mccradden2023normative,
  title={A normative framework for artificial intelligence as a sociotechnical system in healthcare},
  author={McCradden, Melissa D and Joshi, Shalmali and Anderson, James A and London, Alex John},
  journal={Patterns},
  volume={4},
  number={11},
  year={2023},
  publisher={Elsevier}
}`,

	mccradden2023s: String.raw`@inproceedings{mccradden2023s,
  title={What's fair is… fair? Presenting JustEFAB, an ethical framework for operationalizing medical ethics and social justice in the integration of clinical machine learning: JustEFAB},
  author={Mccradden, Melissa and Odusi, Oluwadara and Joshi, Shalmali and Akrout, Ismail and Ndlovu, Kagiso and Glocker, Ben and Maicas, Gabriel and Liu, Xiaoxuan and Mazwi, Mjaye and Garnett, Tee and others},
  booktitle={Proceedings of the 2023 ACM conference on fairness, accountability, and transparency},
  pages={1505--1519},
  year={2023}
}`
};
