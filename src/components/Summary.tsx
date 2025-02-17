export function Summary() {
  return (
    <article className="flex flex-wrap grow gap-3 pt-8 pb-20 pl-14 w-full text-black bg-white rounded-lg max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto text-sm w-[515px] max-md:max-w-full">
        <h1 className="font-bold mb-4">
          Characteristics of a Good Research Design (Simplified)
        </h1>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Objectivity: The design should allow data collection and scoring to
            be free from personal bias, ensuring consistent and impartial
            results.
          </li>
          <li>
            Reliability: The research process should yield consistent results
            when repeated under the same conditions.
          </li>
          <li>
            Validity: The tools and methods should measure exactly what they are
            intended to measure (e.g., a test for intelligence should only
            assess intelligence).
          </li>
          <li>
            Generalizability: Findings from the research should apply to the
            broader population, provided the sample and methodology are
            well-designed.
          </li>
          <li>
            Adequate Information: The design must ensure enough relevant data is
            collected to analyze the problem thoroughly and meet research
            objectives.
          </li>
          <li>
            Flexibility and Efficiency: The design should be adaptable to
            changes, cost-effective, and efficient in using time and resources.
          </li>
          <li>
            Minimizing Bias: It should reduce errors and distortions in data
            collection and analysis, enhancing the credibility of results.
          </li>
        </ul>

        <p className="mb-4">
          Would you like further elaboration on any of these points?
        </p>

        <h2 className="font-bold mb-4">
          Simplified Steps in the Research Process
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            Formulating the Research Problem: Identify and define the topic or
            issue you want to investigate.
          </li>
          <li>
            Extensive Literature Survey: Review existing research, books,
            journals, and reports to understand the topic better.
          </li>
          <li>
            Developing the Hypothesis: Create a tentative assumption
            (hypothesis) to test during the study.
          </li>
          <li>
            Preparing the Research Design: Plan the structure and method of the
            research to ensure efficiency and accuracy.
          </li>
          <li>
            Determining Sample Design: Decide how to select a representative
            sample from the population (e.g., random sampling).
          </li>
          <li>
            Collecting the Data: Gather information through surveys,
            experiments, interviews, or observation.
          </li>
          <li>
            Execution of the Project: Implement the research plan carefully,
            ensuring reliable data collection.
          </li>
          <li>
            Analysis of Data: Organize, code, and analyze the data using
            statistical methods to draw insights.
          </li>
          <li>
            Hypothesis Testing: Use statistical tests (e.g., t-test, F-test) to
            confirm or reject the hypothesis.
          </li>
          <li>
            Generalization and Interpretation: Develop theories or explanations
            based on the findings and relate them to broader contexts.
          </li>
          <li>
            Preparing the Report or Thesis: Write a clear and structured report
            with an introduction, methodology, results, and conclusions.
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-start self-end px-1 pt-3.5 pb-5 text-2xl text-center whitespace-nowrap bg-zinc-300 mt-[550px] max-md:mt-10">
        <button aria-label="Increase font size">+</button>
        <button className="mt-20 max-md:mt-10" aria-label="Decrease font size">
          -
        </button>
      </div>
    </article>
  );
}
