# 01 Inception Assignment
**`Q1. What is Emmet?`** <br />
Emmet is a plugin for many popular text editors like VSCODE Which increase the development time. Its syntax is inspired by the css selectors. It can make development very fast.

**`Q2. What is CDN and why should we use it?`** <br />
CDN stands for Content Delivery Network, and it is a network of servers distributed across various locations around the world. The primary purpose of a CDN is to deliver web content, such as images, videos, stylesheets, JavaScript files, and other assets, to users in a faster and more efficient manner. CDNs are commonly used to enhance the performance, security, and reliability of websites and web applications. Here's why CDNs are used and why they are often the preferred choice:

Faster Content Delivery: CDNs reduce the physical distance between the user's device and the web server that hosts the content. When a user requests a webpage or a resource, the CDN serves it from the nearest edge server, which reduces latency and load times. This results in a faster and smoother user experience.

* Load Distribution: CDNs distribute the load of handling user requests across multiple servers, preventing any single server from being overwhelmed with traffic. This load balancing ensures that websites and applications remain responsive, even during traffic spikes.

* Scalability: CDNs are designed to handle high levels of traffic and can easily scale to accommodate increasing user demand. This scalability is particularly important for websites and services that experience sudden surges in traffic.

* Enhanced Security: Many CDNs offer security features like DDoS (Distributed Denial of Service) protection, web application firewall (WAF), and SSL/TLS encryption. These features help protect websites and applications from malicious attacks and data breaches.

* High Availability: CDNs are built with redundancy and failover mechanisms, ensuring that content remains available even if one or more edge servers become unavailable. This high availability minimizes downtime.

* Improved SEO: Faster loading times and better website performance can positively impact search engine rankings. CDNs can contribute to improved SEO (Search Engine Optimization) by enhancing website speed and user experience.

* Global Reach: CDNs have a network of servers in various geographic locations, allowing websites to deliver content to users around the world with consistent performance. This is crucial for international websites.

* Alternative methods of improving content delivery without using a CDN do exist, but they often come with trade-offs and limitations:

Hosting Content on Multiple Servers: Some websites may host content on multiple servers across different regions, similar to a CDN. However, managing and maintaining such a setup can be complex and expensive.

* Caching: Caching involves storing copies of web content on user devices or at various points along the network. While caching can improve performance to some extent, it may not offer the same level of global reach and scalability as a CDN.

* Dedicated Server Networks: Some large websites and applications may build their own dedicated server networks for content delivery. However, this approach requires significant resources, expertise, and ongoing maintenance.

In summary, CDNs are widely used because they provide a cost-effective, reliable, and scalable solution for delivering web content quickly and securely to users worldwide. While alternative methods exist, CDNs are often the preferred choice for optimizing web performance and user experience.

React, the JavaScript library for building user interfaces, is called "React" because it follows the concept of "reactive" or "declarative" programming. The name reflects its core philosophy of allowing developers to create UIs that react to changes in data and environment.

Here's some more context:

* Declarative programming: React encourages developers to define desired UI state and layout, then take care to update the actual UI to match that state This is in contrast to imperative programming, where developers explicitly specify how to make changes to the UI internally in response to various events or data changes

Answer: React makes it easy to create user interfaces that automatically update in response to changes in the underlying data or environment. When data changes, React simply "reacts" by properly updating those parts of the UI that need to change, without developers having to handle these updates manually

* Component-based: Promotes the decomposition of React UIs into smaller reusable components. These objects are the building blocks of a React application and can be thought of as individual units that "react" to changes in their input data.

* Virtual DOM: React uses a virtual representation of the DOM (Document Object Model) to optimize the update process. It calculates the most efficient way to update the real DOM by comparing the virtual DOM to the current state of the DOM.

In summary, the React name reflects the basic principles of declarative, reactive, and component-based programming, all of which contribute to the efficiency of building user interfaces for web and mobile applications

**`Q: Why is React known as React?`**

React, the JavaScript library for building user interfaces, is called "React" because it follows the concept of "reactive" or "declarative" programming. The name reflects its core philosophy of allowing developers to create UIs that react to changes in data and environment.

Here's some more context:

Declarative programming: React encourages developers to define desired UI state and layout, then take care to update the actual UI to match that state This is in contrast to imperative programming, where developers explicitly specify how to make changes to the UI internally in response to various events or data changes

Reactive: React makes it easy to create user interfaces that automatically update in response to changes in the underlying data or environment. When data changes, React simply "reacts" by properly updating those parts of the UI that need to change, without developers having to handle these updates manually

Component-based: Promotes the decomposition of React UIs into smaller reusable components. These objects are the building blocks of a React application and can be thought of as individual units that "react" to changes in their input data.

Virtual DOM: React uses a virtual representation of the DOM (Document Object Model) to optimize the update process. It calculates the most efficient way to update the real DOM by comparing the virtual DOM to the current state of the DOM.

In summary, the React name reflects the basic principles of declarative, reactive, and component-based programming, all of which contribute to the efficiency of building user interfaces for web and mobile applications

corsorigin is specified in script tag when you are requesting script from another domain.
**`Q: What is cross origin in script tag?`**
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

Tip: The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).