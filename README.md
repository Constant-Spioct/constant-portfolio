# Student Portfolio and Academic Planner

A five-page responsive portfolio and academic task planner created for the COS 106 – Introduction to Web Technologies practical term project at MIVA Open University. The website is built with semantic HTML, a shared CSS stylesheet, and vanilla JavaScript. It has no application framework, package installation, build step, or server-side component.

## Project overview

The portfolio introduces Onwuzurike Izuchukwu Constant, a Data Science student at MIVA Open University. It presents education, professional experience, career aspirations, developing technical skills, and seven data-analysis projects with their respective tools. The Projects page also includes three separate illustrative learning demonstrations; these are concepts, not completed personal projects.

The site includes a client-side academic planner and a contact form demonstration. The Home and About pages use personal photographs. The About page also includes an accessible audio player that loads MDN demonstration audio over the internet.

## Website features

- **Home:** Student introduction, personal photograph, academic interests, and links to other portfolio content.
- **About:** Education at MIVA Open University (Data Science, currently enrolled) and AITECH Abuja (Diploma in Data Analysis / Introduction to Data Science, 2024); professional experience as a SIM Hosting Technician (2022–2024) and Technical Support at SmartSMS Solutions (2024–Present); career aspirations; Microsoft Power BI, Microsoft Excel, Tableau, and developing HTML, CSS, and JavaScript skills. An accessible sample audio player uses MDN demonstration audio.
- **Projects:** Seven actual data-analysis projects, shown with concise title-based descriptions and their supplied tools:
  - Titanic Data Analysis — Microsoft Excel
  - Soda Sales Analysis — Microsoft Power BI
  - HotBites Analysis — Microsoft Power BI
  - Lagos Flooding Analysis — Microsoft Power BI
  - Car Sales Analysis — Tableau
  - Variance Analysis — Tableau
  - Brewlytics Sales Performance Analysis — Tableau

  Screenshots, project files, and verified findings are not included. The separate **LEARNING PROJECTS** section, headed “Exploring ideas through practice,” contains three illustrative demonstrations, not completed personal projects.
- **Academic Planner:** Add tasks with a required title and due date and an optional description; mark tasks complete or pending; delete tasks; filter all, pending, or completed tasks; clear completed tasks; and view live task counts. Tasks are saved in the current browser’s `localStorage`.
- **Contact:** Displays contact details and provides a form with required name, email, phone, and message fields. It validates empty required fields, email format, and digits-only phone numbers. A successful validation displays a confirmation but does not send or store the message.
- **Shared page features:** Responsive navigation with a mobile menu, a skip link, visible keyboard focus styles, Escape-key menu closing, and a dynamically updated copyright year.

## Technologies and design

- HTML5, including semantic page structure, forms, tables, lists, and accessible media controls.
- CSS3 with custom properties, Flexbox, Grid, responsive breakpoints, transitions, hover states, and keyframe animation.
- Vanilla JavaScript using DOM APIs, events, and browser `localStorage`.
- Google Fonts (`DM Sans` and `Manrope`), with CSS font fallbacks if the font service is unavailable.
- Local SVG illustrations for the sample learning concepts. The sample audio is remotely hosted by MDN.
- A navy, teal, and warm off-white visual palette, responsive layouts, and reduced-motion support.

## Project structure

```text
constant-portfolio/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── planner.js
│   └── contact.js
├── assets/
│   └── images/
│       ├── constant-home.jpg
│       ├── constant-about.jpg
│       ├── profile-placeholder.svg
│       ├── project-student.svg
│       ├── project-sales.svg
│       └── project-expenses.svg
└── README.md
```

`profile-placeholder.svg` is retained in the assets folder but is not used by the current pages. The three `project-*.svg` illustrations belong to the sample demonstrations; they are not screenshots of the seven actual projects. The sample audio is loaded from an external MDN URL in `about.html`, so there is no local audio or video asset folder.

## Run locally

1. Download or clone the project folder.
2. From the project root, start a static web server. For example, with Python installed:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` in a browser.
4. Open any page using the site navigation.

No dependencies need to be installed and no build step is required. In VS Code, the Live Server extension is another option. Running through a local server is recommended because `localStorage` behavior for pages opened directly with `file://` can vary by browser.

## JavaScript and data limitations

- `js/main.js` controls the responsive navigation, closes the mobile menu after a navigation link is selected or when Escape is pressed, and fills in the current year.
- `js/planner.js` validates required task titles and due dates, renders tasks using DOM methods, handles completion, deletion, filtering, and clearing completed tasks, updates counts, and saves the task array under `studentPortfolio.academicTasks`.
- Planner tasks are stored only in the current browser profile on the current device. They are not sent to a server, shared between browsers or devices, or backed up. Clearing browser storage can delete them. If browser storage is unavailable or saved data is invalid, the page displays a status message; it does not provide a remote recovery mechanism.
- `js/contact.js` checks required fields, uses the email input’s validity to reject malformed addresses, and requires the phone value to contain digits only. A successful submission only confirms that validation passed. The form does not transmit or save the message.

## Content and media notes

- The Home and About pages use `assets/images/constant-home.jpg` and `assets/images/constant-about.jpg`. Update the image source and descriptive alternative text together if replacing either photograph.
- The About audio player uses MDN-hosted demonstration audio and requires an internet connection to load it. If replacing the source, use audio you own or are permitted to share, update the source and MIME type, and keep the label and fallback link accurate.
- The seven actual project entries intentionally remain concise. No screenshots, project files, detailed project descriptions, or verified findings are currently presented. Add those only when the relevant materials and information are available.
- The learning-project cards and their local SVGs are illustrative concepts and should not be represented as completed projects.
- Contact details displayed on the Contact page are public. Review them before publishing the site.

## Hosting

This is a static website. To use GitHub Pages, publish the project to a GitHub repository and configure Pages to deploy from the `main` branch and repository root. Alternatively, upload the complete project folder to a static host such as Netlify, Cloudflare Pages, or Azure Static Web Apps. Keep all five HTML pages and the `css/`, `js/`, and `assets/` paths together so relative links continue to work.

Test the published site over HTTPS. Google Fonts and the MDN sample audio use external services and require network access. The planner’s `localStorage` remains browser- and device-specific after hosting.

The contact form is not connected to an email service or backend. To receive messages, connect it to a secure backend or a reputable form service, explain what information is collected, and update the form’s confirmation and privacy information to reflect its actual behavior. Do not place secret keys in front-end files.

## Assessment checklist

| Requirement | Where it is demonstrated |
|---|---|
| Five linked pages with semantic page structure | `index.html`, `about.html`, `projects.html`, `planner.html`, `contact.html` |
| Responsive shared navigation and styling | Navigation on each page; `css/style.css`; `js/main.js` |
| Student introduction and personal photograph | `index.html`; `assets/images/constant-home.jpg` |
| Education, qualification, professional experience, aspirations, and skills | `about.html` |
| Accessible sample audio player using demonstration media | `about.html` |
| Seven actual data-analysis project titles and accurately matched tools | `projects.html` |
| Separate learning demonstrations with local illustrative images | `projects.html`; `assets/images/project-student.svg`, `project-sales.svg`, `project-expenses.svg` |
| Task creation, optional description, due dates, completion, deletion, filters, clearing completed tasks, empty state, and statistics | `planner.html`; `js/planner.js` |
| Browser-local persistence and storage limitations | `js/planner.js` |
| Required contact fields and client-side validation; no message delivery | `contact.html`; `js/contact.js` |
| External stylesheet and page-specific JavaScript | `css/style.css`; `js/main.js`, `js/planner.js`, `js/contact.js` |
| Responsive layouts, visible focus, and reduced-motion support | `css/style.css` |
| Local run instructions, project structure, and static hosting guidance | This `README.md` |

## Suggested final checks

- Open all five pages and test the navigation links.
- At a narrow viewport, open and close the mobile menu using its button and the Escape key.
- Add a planner task, mark it complete, try each filter, delete a task, clear completed tasks, and reload the page to check browser-local persistence.
- Submit the contact form with missing fields, an invalid email, and a phone number containing non-digits; then submit valid sample values and confirm the no-delivery message.
- Check both personal photographs, the three sample SVG illustrations, and the About audio player (with internet access).
- Review the layout at phone, tablet, and desktop widths; check keyboard focus and reduced-motion behavior.
