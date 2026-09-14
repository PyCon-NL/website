import type { Schedule } from '../types';

export const schedule: Schedule<2026> = [
  {
    type: "other",
    trackType: "common",
    title: "Walk-in",
    timeSlot: "08:00",
  },
  {
    type: "other",
    trackType: "common",
    title: "Welcome",
    timeSlot: "09:30",
  },
  {
    type: "talk",
    trackType: "common",
    title: "Keynote - TBA",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...`,
    room: "Polars",
    speakerId: 99,
    timeSlot: "09:45",
    year: 2026,
    id: 1,
  },
  {
    type: "other",
    trackType: "common",
    title: "Break",
    timeSlot: "10:30",
  },
  {
    type: "talk",
    trackType: "single",
    title: "Creating safe open source packages in a hostile domain",
    description: `My story is about how my career began to revolve around an open 
    source package, that was finally published on August 18, 2026. 
    
Two years ago, an email from a casino made me quit my super fun job at bol. There, I 
had spent five years working as a Staff (craft lead) member and Engineering manager, 
creating tools in hackathons (the most profitable tool I've started working on made a 
profit of 100 Mln yearly). 

I was climbing the corp ladder, when an unexpected email from a person that presumably 
was terminated directly after that. It pointed me to an unusual Dutch law, that exists 
nowhere else but in the Netherlands. It legally requires casinos to give their customer 
data to a researcher. 

At first, I could not believe it; this would help any researcher to stay independent, 
while collecting a huge dataset for gambling harm prevention and get the model published 
without contracts that would limit the openness of the software! 

But it was true. And even though this legal option already existed for five years, it 
turned out no one had ever used it. I started creating the software from scratch, using 
the Dutch supercomputer SNELLIUS to process the huge amounts of data that I gathered, 
and I loved every minute of it. The Bol.com school of 'YBIYRIYLI' really helped out with 
that. 

Publishing it turned out to be a very different problem from building it. This is a very 
privacy sensitive domain where “just serialise the model” may accidentally leak stuff. For 
instance, there are laws that prohibit the disclosure of 'market information', but how do 
standard packages fit in with these legal requirements? I want to talk about these 
challenges, and what I've tried to combat them.`,
    room: "Polars",
    speakerId: 15,
    timeSlot: "10:45",
    year: 2026,
    id: 2,
  },
  {
    type: "talk",
    trackType: "single",
    title: "Practical Software Architecture for Python Developers",
    description: `In this talk, we'll dive into common software architecture jargon, explore 
    the challenges we face as Python software engineers, and showcase frequent pitfalls using 
    easy-to-understand code examples along with practical ways to avoid them. I'll wrap up by 
    sharing my take on a minimum viable software architecture for real-world Python projects.`,
    room: "Spark",
    speakerId: 22,
    timeSlot: "10:45",
    year: 2026,
    id: 3,
  },
  {
    type: "talk",
    trackType: "single",
    title: "PyLadies Community Event",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...",
    room: "Flash",
    speakerId: 99,
    timeSlot: "10:45",
    year: 2026,
    id: 4,
    multiSlot: 3
  },
  {
    type: "talk",
    trackType: "single",
    title: "Stop firefighting: practical observability for Python APIs, workers & jobs",
    description: `Production has a special talent for turning “seems fine” into “why is 
    everything on fire?” — usually because we're missing signals. A service restarts and 
    never becomes ready, a background worker silently stops consuming tasks, or a database 
    gets overloaded and latency creeps up until downstream services (or customers) notice 
    it first. These situations aren't unsolvable — they're preventable with the right 
    signals in place.

I've seen how stressful this gets when a system is already in production, but there's no 
clear guidance or shared “where to look first” playbook; so every incident starts with 
guesswork. Over time, we turned those lessons into a lightweight standard that replaces 
panic mode with a predictable investigation flow.

In this talk, I'll share a practical, vendor-agnostic observability checklist for a Python 
setup with three cooperating workloads: an HTTP API, an event-driven worker, and a scheduled 
daily job. Each workload fails differently, so each requires a different set of signals to 
stay observable.

We'll cover what “good enough” looks like for logging, metrics, tracing, and alerting: what 
to instrument first, what pitfalls to avoid, and how to design alerts that catch problems 
early without creating noise. You'll leave with a concrete checklist and a phased rollout 
order you can apply to your own Python services — without rewriting your system or committing 
to a specific monitoring vendor.`,
    room: "Polars",
    speakerId: 16,
    timeSlot: "11:25",
    year: 2026,
    id: 5,
  },
  {
    type: "talk",
    trackType: "single",
    title: "TBD", // "Testing LLM agents with Pytest",
    description: "TDB",
//     `Normal pytest tests assume a few things: same input gives same output, 
//     there's one right answer, and it costs nothing to run. Add LLM agents to the mix and 
//     your assumptions go out the window. LLMs are probabilistic, and for closed models you 
//     can never guarantee the same output.

// In this talk, I'll walk through my journey on building (with) LLMs, the need for tests, a 
// framework that was built from these needs, and the features of the 
// [Pytest plugin](https://datarootsio.github.io/pytest-agent-eval/main/) that came from it 
// for testing LLM agents: aggregate runs, the different kind of checks, among other things. 
// We'll start on "what is a test" all the way to what's the industry standard for LLM testing, 
// and how we can make it practical with Pytest and CI runs.`,
    room: "Spark",
    speakerId: 99, // 25,
    timeSlot: "11:25",
    year: 2026,
    id: 6,
  },
  {
    type: "talk",
    trackType: "single",
    title: "Python Polars for Practitioners: When to Drop Pandas",
    description: `Pandas works until you hit memory limits, slow joins, or null coercion 
    bugs. Polars fixes most of these by design: columnar memory layout, strict types, lazy 
    evaluation, and real parallelism. 

We will start with familiar Pandas style analytics tasks, then showcase selected parts using 
Polars to show where lazy execution, query optimization, and memory-efficient execution 
become useful. The focus is not on replacing Pandas everywhere, but on recognizing the point 
where Polars gives clearer, faster, or more maintainable workflows. 

From there, we look at sandboxed execution: running Polars in an isolated environment to 
safely execute dynamically generated transformation code that can also be used as a tool 
for those building in Agents for Data Analytics and Visualization Agentic workflow.`,
    room: "Polars",
    speakerId: 21,
    timeSlot: "12:05",
    year: 2026,
    id: 7,
  },
  {
    type: "talk",
    trackType: "single",
    title: "Breaking Down Python Security: Lessons From Building a Modern SAST Scanner",
    description: `Python powers web applications, automation platforms, and many new AI systems, 
    yet detecting Python-specific weaknesses remains harder than it should be.

Static Application Security Testing (SAST) is a proven way to identify weaknesses in Python code, 
but existing tools often struggle with usability and precision.

In 2025, after evaluating the strengths and limitations of existing Python SAST tools, I set out 
to build a new open source Python SAST scanner focused on usability, reliability, and a 
zero-configuration workflow.

This talk explores the architectural decisions behind building a modern Python SAST scanner. 
We'll look at how Python code can be analysed using abstract syntax trees (ASTs), how security 
rules can detect weaknesses, and the trade-offs between coverage, accuracy, and trustworthy results.

You'll see examples of vulnerabilities in Python code, together with demonstrations of how static 
analysis can detect or fail to detect them before deployment.`,
    room: "Spark",
    speakerId: 19,
    timeSlot: "12:05",
    year: 2026,
    id: 8,
  },
  {
    type: "other",
    trackType: "common",
    title: "Lunch",
    timeSlot: "12:35",
  },
  {
    type: "talk",
    trackType: "single",
    title: "Fire, Forget, Regret: Building Resumable Python Pipelines",
    description: `FastAPI's BackgroundTasks looks like it solves "run this later." It does not 
    survive a restart, does not retry, and gives no way to check if a task finished. Even 
    plain asyncio.create_task() has a gotcha most Python developers have hit without knowing 
    why: if you do not hold a reference to the task, it can be garbage collected mid execution 
    and silently vanish.
    
I previously spoke at PyDelhi Conference on streaming output out of a Python service. This talk 
is the mirror problem: keeping work alive inside your server when it takes minutes or hours, and 
surviving a crash halfway through.

I will walk through three rungs of solving this. First, why BackgroundTasks and fire and forget 
tasks quietly fail in production. Second, what task queues like ARQ, Celery, and Dramatiq add, 
and what they still do not give you: if step six of a ten step pipeline crashes, you restart 
from zero, not step six. Third, the idea behind durable execution tools like Temporal, DBOS, 
and Hatchet: persisting every completed step so a crashed pipeline resumes instead of repeating work.

Live on stage, I will run a real pipeline, kill the process mid run, and restart it to show it 
resuming exactly where it left off, using a small checkpointing library built from the Python 
standard library alone.

I will close with a practical framework for choosing between BackgroundTasks, a task queue, and 
a checkpointed pipeline based on how long your job runs.`,
    room: "Polars",
    speakerId: 23,
    timeSlot: "14:50",
    year: 2026,
    id: 9,
  },
  {
    type: "talk",
    trackType: "single",
    title: "Zero-Downtime Multi-Tenancy in Django: From User-centric to Organizations-based Architecture",
    description: `Migrating a production Django app to multi-tenancy without downtime or bugs 
    seems impossible

At Sendcloud, we refactored a 600k+ lines Django app using proxy models, dual FKs, and strategic 
migrations, with zero downtime, and no bugs.

At SendCloud, we tackled this exact challenge across our Django monolith: 600k+ lines of Python 
code with continuous production traffic. This talk shares our battle-tested strategy that allowed 
continuous deployments throughout the migration, and enabled us to move slowly, one Django app at 
a time.

The approach:
1) Proxy models as a bridge: Creating an Organization proxy of User, which allowed us to change 
ForeignKeys in code while maintaining database compatibility
2) Progressive refactoring: Using helpers like a base class with fallback code, and custom codemods 
to systematically update models, tests, and business logic across all apps
3) Dual foreign keys: Adding new FK constraints pointing to the organization table alongside existing 
user FKs, using PostgreSQL's NOT VALID to avoid table locks
4) Seamless cutover: Swapping from proxy to real Organization model without SQL execution, then 
dropping old constraints`,
    room: "Polars",
    speakerId: 3,
    timeSlot: "14:05",
    year: 2026,
    id: 10,
  },
  {
    type: "talk",
    trackType: "single",
    title: "Ready, Set, Publish! Write your first Python Package with uv",
    description: `Packaging often feels like a mysterious art form - everyone talks about packages, 
    but very few people have actually built one from scratch. In this 90‑minute workshop, we will 
    walk through the whole process together: creating a small package, managing dependencies with 
    uv, building it and publishing it so it can be reused in another project.

Instead of copy‑pasting scripts and hoping all the right dependencies magically appear in your new 
environment, let's create a reusable package.

Packaging isn't complicated - you just need a good starting point. You'll leave with a small, 
working example you can reuse for your future projects.

Target audience: Intermediate Python users. No packaging experience needed - curiosity is enough!

### Requirements:
- Any Python‑friendly IDE (VS Code, Cursor, PyCharm, etc.)
- Basic comfort with the command line
- Basic understanding of Python environments`,
    room: "Spark",
    speakerId: 17,
    timeSlot: "13:30",
    year: 2026,
    id: 11,
    multiSlot: 2
  },
  {
    type: "talk",
    trackType: "single",
    title: "Community Organizers sprint - Part 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...",
    room: "Flash",
    speakerId: 99,
    timeSlot: "13:30",
    year: 2026,
    id: 12,
    multiSlot: 2
  },
  {
    type: "other",
    trackType: "common",
    title: "Break",
    timeSlot: "14:35",
  },
  {
    type: "talk",
    trackType: "single",
    title: "WTF is a data model, anyway???",
    description: `As I continue teaching data science and work with statistics students, it 
    becomes more clear that we in the data community are not reaching the rest of the world, 
    and often not the rest of the programming community, in the precise definition of a model. 
    In this talk, I attempt to shine some light into this black box.

Starting with classical statistics and the linear regression, I explain in detail what a basic 
model is, in a way that is accessible to those without a technical technical background. Building 
on this concept, I move to basic machine learning, including how we select and train models. The 
topic of generative AI, specifically LLMs, rounds out the talk.

At every level, I talk about the capabilities and limitations of our models. And, rather than 
remaining theoretical, we find practical applications from economics, logistics, and, naturally, 
an LLM. None of these things are magic. So let's follow my favorite economics professor and try 
to turn this black box into a grey box!`,
    room: "Polars",
    speakerId: 20,
    timeSlot: "13:30",
    year: 2026,
    id: 13,
  },
  {
    type: "talk",
    trackType: "single",
    title: "What's Inside an asyncio Event Loop?",
    description: `Most Python developers use asyncio through async and await, but beneath that 
    syntax lies a layered networking and scheduling system with several very different APIs.

In this talk, we will open up the asyncio event loop and examine how its main pieces fit together. 
We will start with low-level primitives such as call_soon(), timers, add_reader(), and add_writer(). 
From there, we will move to the Transport and Protocol APIs, and finally to the higher-level streams 
interface built on top of them.

We will compare these layers and discuss the trade-offs between convenience, portability, control, 
and performance. We will also look at buffered protocols, event-loop exception handling, debug 
mode, and the role of contextvars in asynchronous applications.

Finally, we will clarify the reactor and proactor models used by different event-loop implementations, 
including which APIs are available on different platforms and why those differences matter.

This talk is intended for Python developers who already use asyncio but want a clearer mental 
model of what the event loop actually does. You will leave better equipped to choose the right 
abstraction level, understand asyncio documentation, and debug unexpected behavior in asynchronous 
applications.`,
    room: "Polars",
    speakerId: 24,
    timeSlot: "15:25",
    year: 2026,
    id: 14,
  },
  {
    type: "talk",
    trackType: "single",
    title: "Everyone Hates Monorepos (Until They Don't): Building a Solid Python Monorepo with uv",
    description: `Monorepos are one of those topics that makes engineers very opinionated, very 
    fast. Google does it. Amazon doesn't. Your last team swore by them. Your current team swears 
    at them. So who's right?

This workshop starts with the controversy, because it's a real one. We'll trace how monorepos 
evolved, and what the actual tradeoffs are when you're a team of two versus a team of 20. No 
dogma, just honest tradeoffs.

Then we get to work.

Because the inconvenient truth about monorepos in Python is that they were genuinely painful 
to manage — until recently. Multiple virtual environments drifting apart, dependency conflicts 
you only discovered in production, Docker builds that copied half your codebase into the image. 
The tooling just wasn't there.

uv changed that.

In the second half of this workshop, we'll use uv workspaces to build a monorepo from scratch: a 
shared package, two services with their own dependency trees, a unified lockfile, and a quality 
gate that catches dependency issues before they ship. We'll see how a single resolved dependency 
graph surfaces conflicts you didn't know you had, and how that same graph can produce lean, 
auditable Docker images.

You'll leave with a working setup and a clear mental model for when a monorepo is the right 
call, and how to make it one you'll still enjoy maintaining six months from now.

Bring a laptop with **Python** and **uv** installed. All skill levels welcome; intermediate 
Python assumed.`,
    room: "Spark",
    speakerId: 18,
    timeSlot: "14:50",
    year: 2026,
    id: 15,
    multiSlot: 2
  },
  {
    type: "talk",
    trackType: "single",
    title: "Community Organizers sprint - Part 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...",
    room: "Flash",
    speakerId: 99,
    timeSlot: "14:50",
    year: 2026,
    id: 16,
    multiSlot: 2
  },
  {
    type: "other",
    trackType: "common",
    title: "Break",
    timeSlot: "15:55",
  },
  {
    type: "talk",
    trackType: "common",
    title: "Keynote - TBA",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...`,
    room: "Polars",
    speakerId: 99,
    timeSlot: "16:10",
    year: 2026,
    id: 17,
  },
  {
    type: "other",
    trackType: "common",
    title: "Closing",
    timeSlot: "16:55",
  },
  {
    type: "other",
    trackType: "common",
    title: "Drinks & Snacks",
    timeSlot: "17:05",
  },
];
