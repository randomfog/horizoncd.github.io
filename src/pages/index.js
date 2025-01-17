import React from 'react';
import Layout from '@theme/Layout';
import "./index.css"

export default function Hello() {
  return (
    <>
      <a id="skip-to-content" href="#content">Skip to the content.</a>

      <header class="page-header" role="banner">
        <h1 class="project-name">Horizon</h1>
        <h2 class="project-tagline">Horizon is a  cloud-native application delivery platform.  The platform team can quickly support  application delivery based on kubernetes with best practice.</h2>

        <a href="https://github.com/horizoncd/page" class="btn">View on GitHub</a>
        <a href="/docs" class="btn">Docs</a>


      </header>

      <main id="content" class="main-content" role="main">
        <p>Horizon is a cloud-native application Continues Delivery (CD) platform. Platform team can let the developers  deploy their code to cloud
          and kubernetes easily, efficiency and with best practice. Horizon is inspired by ArgoCD and AWS Proton.</p>

        <h2 id="why-horizon">Why Horizon</h2>

        <ol>
          <li><strong>standardized</strong>:  kubernetes is flexible and powerful, but it is complex. it’s hard to let all the developers have a comprehensive understanding of kubernetes and practice best practice. so horizon introduce  a template system to make the best practice under control, and also provide efficient delivery. For example, Platform Team can  provide basic spec of resource tiny(0.5core, 512MB)、small(1core, 1GB), middle(2core, 4GB) etc. by default, not for the developer to select limit or request resource on common case.</li>
          <li><strong>security and reliable</strong>：security and reliable is always a challenge. In Horizon, Horizon  make every change of application durable, reversible and auditable. It’s done with our best practice of GitOps. And  Horizon introduce rbac&amp;member system  to let you  have best practice on fine-grained  permission control.</li>
          <li><strong>multi-cloud</strong>: Horizon provide a consistent application platform to manage multi-cloud, hybrid cloud.</li>
          <li><strong>infrastructure agnostic</strong>：horizon doesn’t limit the kind of workload. the basic kubernetes workloads and self defined <a href="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/">CR</a> are all supported.</li>
          <li><strong>efficiency</strong>：platform team can  quickly make an  end to end  best practice workload delivery  based on Horizon template.</li>
        </ol>

        <h2 id="features">Features</h2>

        <h3 id="gitops">GitOps</h3>
        <p>In Horizon, Git is Used as the only “The Source Of Truth”, Horizon stores template  and all values in Git repository.
          Every change  are durable, reversible and auditable, Including code, image, environment variables, resource spec, etc.</p>

        <h3 id="horizon-template">Horizon Template</h3>
        <p>Horizon Template is based on helm and jsonschema.  The Platform Team can make the basic practice (including security, affinity, priority, resource, etc.)
          by default, and provide user a simple and uniform interface which is defined by jsonschema files. jsonschema is used for provide a user friend HTML form
          on the Horizon Based on react-jsonschema-form.  It’s highly  Scalable and flexible to make your own best practice based on the simple template system.</p>

        <h3 id="rbac--member">RBAC &amp; Member</h3>
        <p>Horizon Provide a  RBAC &amp; Member system  Just like Gitlab. You can easily define your Own PlatForm Member and Role(Just like Kubernetes role and rolebinding).
          In our Practice, we Provide Role like PE, Owner, Maintainer, Guest. the  Owner is binding with the Read(list pods, read all properties, etc.)/Write(deploy, builddeploy, restart, release, delete etc.) Permission, the guest just have the read permission.</p>

        <h3 id="ease-for-integration">Ease For Integration</h3>
        <p>Horizon Provide OpenAPI, AccessToken, Oauth2.0, IDP Connector, Webhooks. It makes easy to d integrate internal system.</p>

        <h3 id="ease-for-use">Ease For use</h3>
        <p>We Also Provide Product Features, Like Template Management, Kubernetes Management, Monitoring Management, Environment Management.
          PlatForm Team can easily set up  through the horizon web ui.</p>

        <h3 id="architecture">Architecture</h3>
        <p><img src="/image/horizon-opensource-arch.jpg" alt="arch"/></p>

        <h4 id="horizon-core">Horizon-Core</h4>
        <p>The Horizon Core Server is the Rest Server which export the OpenAPIs consume by the Web UI, CLI, and other systems. it also provides features like:</p>
        <ul>
          <li>Kubernetes and environment Management</li>
          <li>Template Management</li>
          <li>PrivateToken,AccessToken Management</li>
          <li>Group,application,cluster management</li>
          <li>CI,CD Pipeline Management</li>
          <li>WekHook Management</li>
          <li>User and Member Management</li>
          <li>IDP Management</li>
        </ul>

        <h4 id="gitlab--argocd">Gitlab &amp; ArgoCD</h4>

        <ul>
          <li>Gitlab: Gitlab store all the configs of an application, “The Only Source Of Truth” of an application.</li>
          <li>ArgoCD:  ArgoCD is our default  GitOps Engine that sync  Application Workloads from  git repo to Kubernetes.</li>
        </ul>

        <h4 id="tekton--s3">Tekton &amp; S3</h4>
        <ul>
          <li>Tekton: the cloudnative pipeline used for our default ci engine, to auto build images from source.</li>
          <li>S3: Completed Pipelines are restore to S3, you can use any of S3 Compatible Service like Mino or Aws S3 service  and soon.</li>
        </ul>

        <h4 id="grafana">Grafana:</h4>
        <p>For convenient, we default integrate monitoring feature into Horizon. Just Config you Source Prometheus, Horizon will automatically
          retrieve the metric to show the Metric DashBoard on Horizon-Web.</p>

        <h4 id="mysql--redis">MySql &amp; Redis</h4>
        <p>For Store and Cache Basic meta Info, such like  member, user, token, webhook, IDPs and soon.</p>

        <h2 id="faqs">FAQs</h2>

        <h3 id="horizon-vs-argocd">Horizon vs ArgoCD</h3>
        <p>ArgoCD is a great tool  for the kubernetes platform team or users that familiar with kubernetes, actually  Horizon use argoCD as the default GitOps engine. But we think it is not very user-friendly for the application developer team. We make Horizon more user-friendly  by  core features like group、member &amp; rbac、 template and so on.</p>

        <h3 id="horizon-vs-openshift">Horizon vs OpenShift</h3>
        <p>We think both Horizon and  Openshift  solve the same problem. They all give you the ability to build、deploy and run applications on kubernetes and cloud.  But they looks  fundamentally  different, this mainly because openshift is more an extension and enhancement of kubernetes, but now horizon is aimed to be a  continues  delivery platform based on kubernetes and cloud.</p>

        <h2 id="horizon-gitops">Horizon GitOps</h2>
        <p>GitOps is a best practice of application delivery,  Horizon Follow GitOps Best Practice. We use Git to make  every change of application stable, reliable, secure, auditable and reversible.</p>

        <h2 id="horizon-usage">Horizon Usage</h2>
        <p>Within NetEase Cloud Music, the platform team delivers a variety of service template to users based on Horizon, including webserver,  serverless (Knative application), middleware etc. 400+  R&amp;D make hundreds of build and deploy based on Horizon every day.</p>



        <footer class="site-footer">

          <span class="site-footer-owner"><a href="https://github.com/horizoncd/page">page</a> is maintained by <a href="https://github.com/horizoncd">horizoncd</a>.</span>

          <span class="site-footer-credits">This page was generated by <a href="https://pages.github.com">GitHub Pages</a>.</span>
        </footer>
      </main>


    </>
  )
}
