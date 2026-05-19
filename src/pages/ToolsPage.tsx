import { useState } from 'react';
import { Wrench, ExternalLink, Github } from 'lucide-react';
import { Tool } from '../types';
import ToolDetailPage from './ToolDetailPage';

interface ToolsPageProps {
  onNavigate: (page: string) => void;
}

const toolData: Tool[] = [
  {
    id: '1',
    name: 'Boundary Value Calculator',
    description: 'Automatically identify boundary values for numeric and date ranges in your test scenarios.',
    features: ['Valid/Invalid boundaries', 'Multiple data types', 'Export test cases'],
    status: 'Available',
    longDescription: 'The Boundary Value Calculator helps testers systematically identify boundary values for any numeric or date range input. Simply enter your range parameters and the tool generates a complete set of boundary test values, including min, min+, nom, max-, and max values.\n\nThe tool supports integer ranges, decimal ranges, and date ranges. It also handles special cases like exclusive boundaries and open/closed intervals. Results can be exported in multiple formats for integration with your test management system.',
    howToUse: [
      'Select the data type for your input (Integer, Decimal, or Date).',
      'Enter the minimum and maximum values for the range.',
      'Choose whether boundaries are inclusive or exclusive.',
      'Click "Generate" to create the boundary value test cases.',
      'Review the generated test values and expected results.',
      'Export the test cases in your preferred format (CSV, JSON, or XML).',
    ],
    useCases: [
      'Testing financial applications with currency amount ranges',
      'Validating age restrictions in user registration forms',
      'Testing date range filters in reporting systems',
      'Verifying quantity limits in e-commerce platforms',
      'Testing sensor value thresholds in IoT applications',
    ],
    limitations: [
      'Currently supports only single-dimension ranges (not multi-dimensional).',
      'Custom boundary value strategies (like robust worst case) are not yet supported.',
      'The tool does not generate test cases for non-numeric inputs.',
    ],
  },
  {
    id: '2',
    name: 'Decision Table Generator',
    description: 'Create comprehensive decision tables from business rules and generate optimized test cases.',
    features: ['Rule validation', 'Contradiction detection', 'CSV export'],
    status: 'Available',
    longDescription: 'The Decision Table Generator transforms business rules into structured decision tables, making it easy to identify all possible combinations of conditions and their corresponding actions. The tool automatically detects contradictions and redundancies in your rules, ensuring your test cases are both complete and minimal.\n\nInput your conditions and actions, define the rules, and the tool generates a full decision table with optimized test coverage.',
    howToUse: [
      'Define all conditions (inputs) and their possible values (Y/N or custom).',
      'Define all actions (outputs) that can result from the conditions.',
      'Enter business rules mapping condition combinations to actions.',
      'Click "Generate Table" to create the full decision table.',
      'Review the tool\'s analysis for contradictions and redundancies.',
      'Export the optimized test cases for implementation.',
    ],
    useCases: [
      'Testing discount eligibility rules in e-commerce systems',
      'Validating loan approval logic in banking applications',
      'Testing access control policies in security systems',
      'Verifying shipping cost calculation rules',
      'Testing insurance claim processing logic',
    ],
    limitations: [
      'Maximum of 15 conditions per table (beyond this, pairwise reduction is recommended).',
      'Does not support sequential or state-dependent rules.',
      'Import from existing requirements documents is not yet available.',
    ],
  },
  {
    id: '3',
    name: 'Pairwise Test Designer',
    description: 'Generate efficient pairwise combinations for configuration testing with multiple parameters.',
    features: ['N-way combinations', 'Constraint support', 'Coverage analysis'],
    status: 'Available',
    longDescription: 'The Pairwise Test Designer generates efficient test suites using combinatorial testing techniques. Instead of testing all possible combinations (which can be astronomically large), pairwise testing ensures that every pair of parameter values is tested together at least once, dramatically reducing the number of test cases while maintaining high defect detection rates.\n\nThe tool supports 2-way (pairwise) through N-way combinatorial testing, with constraint handling for invalid combinations.',
    howToUse: [
      'Define all test parameters and their possible values.',
      'Add any constraints between parameters (e.g., "If A=X then B cannot be Y").',
      'Select the combinatorial strength (2-way, 3-way, or custom N-way).',
      'Click "Generate" to create the optimized test suite.',
      'Review the coverage analysis to verify all pairs are covered.',
      'Export the test suite with parameter combinations and expected results.',
    ],
    useCases: [
      'Testing software configurations across multiple platforms and browsers',
      'Validating API parameter combinations',
      'Testing mobile app behavior across device types and OS versions',
      'Verifying system behavior with different feature flag combinations',
      'Testing database compatibility across engines and versions',
    ],
    limitations: [
      'Very large parameter sets (50+ values per parameter) may take significant time to process.',
      'The tool does not automatically determine expected results — these must be provided manually.',
      'Complex nested constraints may require manual simplification.',
    ],
  },
  {
    id: '4',
    name: 'State Transition Modeler',
    description: 'Visual tool for creating state transition diagrams and generating test paths.',
    features: ['Visual editor', 'Path coverage', 'Test case export'],
    status: 'Coming Soon',
    longDescription: 'The State Transition Modeler provides an intuitive visual interface for creating state transition diagrams. Define states, events, and transitions, then automatically generate test cases that cover all transitions (0-switch coverage) and sequences of transitions (1-switch and N-switch coverage).\n\nThis tool is currently under development and will be available soon.',
    howToUse: [
      'Create a new state transition model.',
      'Add states by clicking on the canvas.',
      'Define transitions between states with events and guard conditions.',
      'Mark initial and final states.',
      'Select coverage level (0-switch, 1-switch, or N-switch).',
      'Generate test cases and export results.',
    ],
    useCases: [
      'Testing login/session management flows',
      'Validating order processing state machines',
      'Testing IoT device state transitions',
      'Verifying workflow engine behavior',
      'Testing game state management',
    ],
    limitations: [
      'Tool is not yet available — currently in development.',
      'Planned initial release will support up to 20 states per model.',
      'Real-time collaboration features are planned for a future release.',
    ],
  },
];

export { toolData };

export default function ToolsPage({ onNavigate }: ToolsPageProps) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  if (selectedTool) {
    return (
      <ToolDetailPage
        tool={selectedTool}
        onBack={() => setSelectedTool(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Free Testing Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, free tools to streamline your test design process and improve efficiency.
            All tools are open-source and available to the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {toolData.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl hover:border-cyan-300 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tool.status === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tool.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedTool(tool)}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-sm hover:shadow-md"
                >
                  <ExternalLink className="h-5 w-5" />
                  View Details
                </button>
                <button className="p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <Github className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 md:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <Wrench className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              All our tools are open-source. Join our community of developers and help us build
              better testing tools for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Github className="h-5 w-5" />
                View on GitHub
              </button>
              <button
                onClick={() => onNavigate('apply')}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
