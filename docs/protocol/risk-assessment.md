# Risk Assessment

A robust risk assessment criterion will be leveraged to measure risk across the platform for Solace to support a return on investment and guaranteed coverage for policies.

## Main Components

Solace will use an inter-nodal matrix (INM matrix) to assess risk from three primary
dimensions, or risk assessment nodes:
- Node 1) Machine learning (ML) models leveraging heuristics to analyze risk actively;
- Node 2) Security audit output and expert analysis for newer projects;
- Node 3) Comparable protocol analysis on the basis of underlying infrastructure.

### Node 1: ML-based Prediction Model

Node 1 of the INM matrix will leverage machine learning algorithms to build models that assess the risk. The learning problem can be constituted as follows: obtain an appropriate mapping given the data described by features. This task aims to learn the real-valued functional relationship between the input and output spaces output = f(input), predicting a numerical target variable. Due to limited historical data availability (DeFi is very young after all), intelligent construction of the feature space is critical to training accurate models. However, there are machine learning algorithms designed to handle such challenges and imbalanced datasets (e.g., ones with only a few negative or positive samples). To find the suitable models, the features and outputs will be closely curated and analyzed ensuring accurate representation of the overall risk. And as more data becomes available, this approach will continuously develop and improve the risk assessment accuracy.

### Node 2: Qualitative Assessment

Node 2 leverages third-party inputs for a qualitative technical audit of protocols. Key aspects of assessing risk:
- The security measures taken by the team in smart contract development;
- Code analysis and security audit;
- Operational excellence of the team (i.e., IT infrastructure, bug bounty, etc.).

Solace will actively work with security audit firms and third-party experts to help assess risk and support community growth in order to continuously improve risk assessments.

### Node 3: Benchmarking Assessment

Node 3 will leverage comparable protocol analysis in order to benchmark the overall risk profile of a DeFi product. Comparable protocols will be selected depending on the underlying infrastructure of the product being covered. For example, if covered product B is a fork of protocol A, the risk assessment of protocol A will be leveraged as a basis for the risk for product B. Similarly, if several protocols are similar in code, function, team, or architecture of a new product, the comparable protocols risk assessments will guide the risk assessment of the covered product.

### INM matrix

The INM matrix weighs each node depending on the maturity of a DeFi product. Similar to a concept known as model ensembles in machine learning, Solace utilizes a combination of nodes (models) to tailor the risk assessment process. The INM matrix is a form of an intelligent agent that, given the available information (both knowledge and perception) maximizes the goal achievement: discovering the accurate amount of risk carried by the individual protocols that are being covered, as well as the impact on overall Solaces risk profile. For example, mature DeFi products will have higher weights on machine learning quantitative models due to the larger amounts of data available. For less mature products, Nodes 2 and 3, security audit output / expert input and comparable protocol analysis will have greater weight.