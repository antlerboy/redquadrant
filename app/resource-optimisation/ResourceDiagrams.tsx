// Diagram structure and text retained from antlerboy/ResourceOptimisation.

export function ResourceLenses() {
  return <div className="rq-resource-diagrams"><figure className="lens-diagram" aria-labelledby="resource-lens-caption">
            <div className="lens-panel lens-outside">
              <span className="diagram-label">Outside in</span>
              <h3>See the system from the person’s purpose.</h3>
              <ul>
                <li>Need and demand</li>
                <li>Journey and experience</li>
                <li>Value and outcomes</li>
              </ul>
            </div>
            <div className="lens-centre">
              <span>Shared test</span>
              <strong>Purpose</strong>
              <strong>Outcomes</strong>
              <small>Service flow connects both views</small>
            </div>
            <div className="lens-panel lens-inside">
              <span className="diagram-label">Inside out</span>
              <h3>See the organisation through its work.</h3>
              <ul>
                <li>Work packages</li>
                <li>Resource and cost</li>
                <li>Capability and dependencies</li>
              </ul>
            </div>
            <figcaption id="resource-lens-caption">
              <strong>See the work before changing the structure.</strong>
              Structure is one design choice, not the starting assumption.
            </figcaption>
          </figure></div>;
}

export function ResourceWorkPackage() {
  return <div className="rq-resource-diagrams"><figure className="package-scale" aria-label="Work package level of analysis">
              <div className="scale-block scale-wide">
                <span>Why</span>
                <strong>Programme or outcome</strong>
              </div>
              <div className="scale-connector" aria-hidden="true" />
              <div className="scale-block scale-focus">
                <span>What</span>
                <strong>Work package</strong>
                <small>The unit of choice</small>
              </div>
              <div className="scale-connector" aria-hidden="true" />
              <div className="scale-block scale-narrow">
                <span>How</span>
                <strong>Activity or task</strong>
              </div>
            </figure></div>;
}

export function ResourceSevenWays() {
  return <div className="rq-resource-diagrams"><figure className="seven-ways" aria-labelledby="resource-ways-caption">
            <div className="policy-bar">
              <span>07</span>
              <strong>Change policy</strong>
              <small>Change the rules and choices that shape the whole system</small>
            </div>

            <div className="service-flow" aria-label="Service flow from demand to resources">
              <div>
                <span>Outside</span>
                <strong>Demand</strong>
              </div>
              <i aria-hidden="true">→</i>
              <div>
                <span>Interface</span>
                <strong>Contact</strong>
              </div>
              <i aria-hidden="true">→</i>
              <div>
                <span>Work</span>
                <strong>Process / project</strong>
              </div>
              <i aria-hidden="true">→</i>
              <div className="flow-featured">
                <span>Inside</span>
                <strong>Resources</strong>
              </div>
            </div>

            <div className="flow-levers">
              <div><span>01</span><strong>Shape demand</strong></div>
              <div><span>02</span><strong>Economies of flow</strong></div>
              <div><span>03</span><strong>Reduce waste</strong></div>
              <div className="lever-featured"><span>04</span><strong>Optimise resources</strong></div>
            </div>

            <div className="system-levers">
              <div>
                <span>05</span>
                <strong>Economies of organisation</strong>
                <small>Organise around the work</small>
              </div>
              <div>
                <span>06</span>
                <strong>Optimise procurement</strong>
                <small>Make better source and market choices</small>
              </div>
            </div>
            <figcaption id="resource-ways-caption">
              The Seven Ways connect demand, flow, work, resource,
              organisation, procurement, and policy. Resource Optimisation is
              the inside-out lens at the heart of the fourth way.
            </figcaption>
          </figure></div>;
}

