import ButtonPrimaryExternal from "../buttons/button-primary-external";
import React from "react";
import charterBrown from "../../images/charter-rebranding/charter-brown.png";
import charterClassic from "../../images/charter-rebranding/charter-classic.png";
import charterCompass from "../../images/charter-rebranding/charter-compass.png";
import { motion } from "framer-motion";

const CharterRebrandingDocs = () => {
  return (
    <section className="docs">
      <div className="two-column">
        <motion.div
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            Charter Logo Redesign
          </motion.h5>
          <motion.h6
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            UX Designer & Creative Lead
          </motion.h6>
        </motion.div>
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 2.25 }}
        >
          <div className="left">
            <p>
              I was hired at Charter Healthcare Group for more than just
              engineering - one of my first projects would be helping reimagine
              the Charter brand, which was antiquated and needed some TLC!
            </p>
            <p className="subtitle" style={{ marginBottom: "32px" }}>
              I started the rebranding campaign off with the most notable
              representation of the Charter brand - the logo.
            </p>
            <h6 className="subtitle-blue">Before: The Original Logo & Brand</h6>
            <p>
              The original Charter brand and logo were conceived in the earlier
              2000s, and it was noticeable at a glance. The palette was defined
              by shades of browns and tans with a pink accent color, and the
              logo featured ornate script font and ambiguous imagery intended to
              be a feather, but often confused for a leaf. The 'Healthcare'
              portion of the logo sported a serif font reminiscent of Times New
              Roman (maybe even actually Times New Roman?).
            </p>
            <img src={charterClassic} alt="Original Logo" />
            <p>Sometimes even appearing as such in certain collateral 👇🏼</p>
            <img src={charterBrown} alt="Home page" />
            <h6 className="subtitle-blue">The Process</h6>
            <p>
              Initially, I began drafting refreshed designs of the current logo.
              My thought process, as well as the consensus across the executive
              team, was that years of brand loyalty have led to a fondness of
              the current logo and brand, so a complete overhaul wasn't in
              order. I started by modernizing the typography and redoing the
              feather imagery to bring it up to more modern graphic standards.
            </p>
            <p>
              Through several iterations, internal surveys, executive meetings,
              a growing disdain for the ambiguity of the feather/leaf and its
              lack of relevant symbolism, and the timely addition of a VP of
              Communications, we ultimately decided that refreshing the current
              logo wasn't properly bringing the company brand into the modern
              age. We needed to be bold.
            </p>
            <p>
              The new VP of Comms, myself, and some other key players began
              brainstorming more relevant imagery to our mission and vision as a
              company. I proposed a compass as a cool versatile symbol of our
              daily duty at Charter - helping people navigate their post-acute
              care journey. With the executive team's support, I dove right in
              and started designing.
            </p>
          </div>
          <div className="right">
            <h6 className="subtitle-blue">After: A New 'Charter'</h6>
            <p>
              In the new design, I leveraged many changes to accomplish a proper
              refresh. First - I implemented new colors. I kept our classic
              'Charter Pink' but with a deepened saturation and darker tone for
              better online accessibility. As a secondary accent, I added a
              clean aqua blue to tie in a more familiar color in the healthcare
              industry. And the third color in the logo would be white or a dark
              navy blue depending on the background its used against for optimal
              accessibility.
            </p>
            <p>
              The symbolism featured a more creative take on a compass - a 'C'
              for 'Charter' with a minimalistic compass face baked into the
              interior. I segmented the body of the 'C' to maximize the usage of
              the colors so the imagery could stand alone without any text if
              needed.
            </p>
            <p>
              And finally, the typography featured 'Dosis', a nice clean
              sans-seriff font that nicely complimented the minimalism of the
              logo's new compass imagery. The kerning was turned up and the
              'healthcare' portion was kept smaller to increase the cleanliness
              and reduce the visual clutter.
            </p>
            <p>Okay enough talking - here's what I came up with: </p>
            <img src={charterCompass} alt="Compass Logo" />
            <p>
              Fondness quickly grew for this new logo - and thus Charter's new
              logo and brand identity were born! Concurrently, I was building
              our design system from the ground up to document the typography,
              colors, etc. as we ironed them out. Go read more about that
              project next if you're intrigued, but in sum it helped easily
              translate our rebranding choices into component-driven UX design
              for our new website and other software/branding projects.
            </p>
            <h6 className="subtitle-blue">What I learned</h6>
            <p>
              This project taught me a lot about UX Design obviously, in having
              to make design choices rooted in best practices (like the robust
              color theories and typography standards) as much as possible for
              the new logo designs. I got really good at using Figma to build
              quality graphics and manage the design documentation as we moved
              along.
            </p>
            <p>
              I also learned a lot about project management in keeping the
              redesign moving along, circling back with the executive team and
              iterating further many times until we achieved what we intended
              to.
            </p>
            <p>
              Open, honest communication was crucial to our success and I was
              lucky to have a gracious and encouraging executive team to answer
              to. Taking criticism constructively isn't always easy when you own
              the designs you're presenting, but I had plenty of practice
              throughout this project.
            </p>
            <h6 className="subtitle-blue">Take a look!</h6>
            <ButtonPrimaryExternal
              link="https://unifydesign.netlify.app/logos"
              content="See live logo ✨"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharterRebrandingDocs;
