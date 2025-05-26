import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
import Menu from './components/Menu';
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  FileUploader,
  Modal,
  Dialog,
  Drawer,
  Tooltip,
  Badge,
  Toast,
  Snackbar,
  Alert,
  Avatar,
  Card,
  List,
  ListItem,
  Pagination,
  Tabs,
  Accordion,
  Breadcrumb,
  Navbar,
  Sidebar,
  Dropdown
} from './components';

const CodeExample = ({ code, children }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border dark:border-gray-700 divide-y dark:divide-gray-700 rounded-lg overflow-hidden mb-6">
      <div className="p-4 bg-white dark:bg-gray-800">
        {children}
      </div>
      <div className="border-t">
        <button
          onClick={() => setShowCode(!showCode)}
          className="w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-left flex items-center"
        >
          <svg
            className={`w-4 h-4 mr-2 transform transition-transform ${showCode ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
        {showCode && (
          <div className="bg-gray-800 dark:bg-gray-900 p-4 overflow-x-auto">
            <pre className="text-sm text-white">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const ComponentSection = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
    {children}
  </section>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [toastVisible, setToastVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar
        brand="Component Library"
        items={[
          { label: 'Home', href: '#', active: true },
          { label: 'Components', href: '#' },
          { label: 'Documentation', href: '#' },
        ]}
        rightItems={[
          <Menu
            key="menu"
            items={[
              { label: 'Profile', href: '#profile' },
              { label: 'Settings', href: '#settings' },
              { divider: true },
              { label: 'Help', href: '#help' },
              { label: 'Sign out', href: '#signout' }
            ]}
          />,
          <ThemeToggle key="theme-toggle" />
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Component Library Documentation</h1>

        <ComponentSection title="Buttons">
          <CodeExample code="<Button>Default Button</Button>">
            <div className="space-x-4">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </CodeExample>
        </ComponentSection>

        <ComponentSection title="Form Controls">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CodeExample code="<Input placeholder='Enter text...' />">
              <Input placeholder="Enter text..." />
            </CodeExample>

            <CodeExample code="<Textarea placeholder='Enter long text...' />">
              <Textarea placeholder="Enter long text..." />
            </CodeExample>

            <CodeExample code="<Select options={[...]} />">
              <Select
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                ]}
                placeholder="Select an option"
              />
            </CodeExample>

            <CodeExample code="<Checkbox label='Check me' />">
              <Checkbox label="Check me" />
            </CodeExample>

            <CodeExample code="<Radio label='Select me' />">
              <div className="space-y-2">
                <Radio name="group" label="Option 1" />
                <Radio name="group" label="Option 2" />
              </div>
            </CodeExample>

            <CodeExample code="<Switch />">
              <Switch label="Toggle me" />
            </CodeExample>
          </div>
        </ComponentSection>

        <ComponentSection title="Feedback & Alerts">
          <CodeExample code="<Alert type='success' title='Success!' message='Operation completed.' />">
            <div className="space-y-4">
              <Alert type="success" title="Success!" message="Operation completed successfully." />
              <Alert type="error" title="Error!" message="Something went wrong." />
              <Alert type="warning" title="Warning!" message="Please be careful." />
              <Alert type="info" title="Info" message="Here's some information." />
            </div>
          </CodeExample>

          <div className="mt-4 space-x-4">
            <Button
              onClick={() => setToastVisible(true)}
            >
              Show Toast
            </Button>
            <Button
              onClick={() => setSnackbarVisible(true)}
            >
              Show Snackbar
            </Button>
          </div>

          {toastVisible && (
            <Toast
              message="This is a toast message"
              type="success"
              onClose={() => setToastVisible(false)}
            />
          )}

          {snackbarVisible && (
            <Snackbar
              message="This is a snackbar message"
              action="Undo"
              onActionClick={() => console.log('Undo clicked')}
              onClose={() => setSnackbarVisible(false)}
            />
          )}
        </ComponentSection>

        <ComponentSection title="Navigation">
          <CodeExample code="<Tabs tabs={[...]} />">
            <Tabs
              tabs={[
                { id: 'tab1', label: 'Tab 1' },
                { id: 'tab2', label: 'Tab 2' },
                { id: 'tab3', label: 'Tab 3' },
              ]}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </CodeExample>

          <CodeExample code="<Breadcrumb items={[...]} />">
            <Breadcrumb
              items={[
                { label: 'Home', href: '#' },
                { label: 'Components', href: '#' },
                { label: 'Navigation' },
              ]}
            />
          </CodeExample>
        </ComponentSection>

        <ComponentSection title="Layout & Content">
          <CodeExample code="<Card title='Card Title' />">
            <Card
              title="Card Title"
              subtitle="Card Subtitle"
              className="dark:bg-gray-800 dark:text-white"
              footer={<Button variant="secondary">Action</Button>}
            >
              <p>This is the card content.</p>
            </Card>
          </CodeExample>

          <CodeExample code="<List><ListItem /></List>">
            <List variant="divided">
              <ListItem
                leading={<Avatar alt="User" />}
                title="List Item 1"
                subtitle="Description"
                trailing={<Badge content="New" />}
              />
              <ListItem
                leading={<Avatar alt="User" />}
                title="List Item 2"
                subtitle="Description"
              />
            </List>
          </CodeExample>

          <CodeExample code="<Accordion items={[...]} />">
            <Accordion
              items={[
                { title: 'Section 1', content: 'Content for section 1' },
                { title: 'Section 2', content: 'Content for section 2' },
              ]}
            />
          </CodeExample>
        </ComponentSection>

        <ComponentSection title="Overlays">
          <div className="space-x-4">
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Button onClick={() => setIsDrawerOpen(true)}>
              Open Drawer
            </Button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Modal Title"
          >
            <p>This is the modal content.</p>
          </Modal>

          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <h3 className="text-lg font-medium">Drawer Content</h3>
            <p className="mt-4">This is the drawer content.</p>
          </Drawer>
        </ComponentSection>

        <ComponentSection title="Data Display">
          <CodeExample code="<Badge content='42' />">
            <div className="space-x-4">
              <Badge content="42" />
              <Badge content="New" variant="success" />
              <Badge content="Warning" variant="warning" />
              <Badge content="Error" variant="danger" />
            </div>
          </CodeExample>

          <CodeExample code="<Avatar alt='User' />">
            <div className="space-x-4">
              <Avatar alt="John Doe" />
              <Avatar alt="Jane Doe" status="online" />
              <Avatar src="https://i.pravatar.cc/300" alt="User" />
            </div>
          </CodeExample>

          <CodeExample code="<Tooltip content='Helpful tip'>Hover me</Tooltip>">
            <Tooltip content="This is a helpful tooltip">
              <Button>Hover me</Button>
            </Tooltip>
          </CodeExample>
        </ComponentSection>

        <ComponentSection title="Navigation Components">
          <CodeExample code="<Dropdown items={[...]} />">
            <Dropdown
              trigger={<Button>Open Menu</Button>}
              items={[
                { label: 'Profile', href: '#' },
                { label: 'Settings', href: '#' },
                { divider: true },
                { label: 'Logout', href: '#' },
              ]}
            />
          </CodeExample>

          <div className="mt-8">
            <CodeExample code="<Pagination currentPage={1} totalPages={5} />">
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={(page) => console.log('Page:', page)}
              />
            </CodeExample>
          </div>
        </ComponentSection>
      </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
