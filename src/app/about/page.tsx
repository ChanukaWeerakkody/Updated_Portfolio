import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="32" fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={about.avatar.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── Top Hero / Profile Section ───────────────────────────────────── */}
      <Column fillWidth gap="20" horizontal="center">
        {about.avatar.display && (
          <Column gap="12" horizontal="center">
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                {person.location}
              </Text>
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8" horizontal="center">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        {about.calendar.display && (
          <Row
            fitWidth
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            radius="full"
            padding="4"
            gap="8"
            vertical="center"
            style={{ backdropFilter: "blur(var(--static-space-1))" }}
          >
            <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
            <Row paddingX="8">
              <Text variant="body-default-s">Schedule a call</Text>
            </Row>
            <IconButton
              href={about.calendar.link}
              data-border="rounded"
              variant="secondary"
              icon="chevronRight"
            />
          </Row>
        )}

        <Column gap="4" horizontal="center">
          <Heading variant="display-strong-xl" align="center">
            {person.name}
          </Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak" align="center">
            {person.role}
          </Text>
        </Column>

        {social.length > 0 && (
          <Row gap="8" wrap horizontal="center" fitWidth data-border="rounded">
            {social.map(
              (item) =>
                item.link && (
                  <React.Fragment key={item.name}>
                    <Row s={{ hide: true }}>
                      <Button
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <IconButton
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </Row>
                  </React.Fragment>
                ),
            )}
          </Row>
        )}
      </Column>

      {/* ── Main Content Section ───────────────────────────────────────── */}
      <Column fillWidth gap="40">
        {/* Introduction */}
        {about.intro.display && (
          <Column fillWidth gap="m" padding="24" radius="l" border="neutral-alpha-medium" background="surface">
            <Text variant="body-default-l" onBackground="neutral-weak">
              {about.intro.description}
            </Text>
          </Column>
        )}

        {/* Work Experience */}
        {about.work.display && (
          <Column fillWidth gap="20">
            <Heading as="h2" id={about.work.title} variant="display-strong-s">
              {about.work.title}
            </Heading>
            <Column fillWidth gap="l">
              {about.work.experiences.map((experience, index) => (
                <Column
                  key={`${experience.company}-${experience.role}-${index}`}
                  fillWidth
                  padding="24"
                  radius="l"
                  border="neutral-alpha-medium"
                  background="surface"
                >
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="12">
                    {experience.achievements.map((achievement: React.ReactNode, achIndex: number) => (
                      <Text
                        as="li"
                        variant="body-default-m"
                        key={`${experience.company}-${achIndex}`}
                      >
                        {achievement}
                      </Text>
                    ))}
                  </Column>
                  {experience.images && experience.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {experience.images.map((image, imgIndex) => (
                        <Row
                          key={imgIndex}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </Column>
        )}

        {/* Education */}
        {about.studies.display && (
          <Column fillWidth gap="20">
            <Heading as="h2" id={about.studies.title} variant="display-strong-s">
              {about.studies.title}
            </Heading>
            <Column fillWidth gap="m">
              {about.studies.institutions.map((institution, index) => (
                <Column
                  key={`${institution.name}-${index}`}
                  fillWidth
                  padding="20"
                  radius="l"
                  border="neutral-alpha-medium"
                  background="surface"
                  gap="4"
                >
                  <Text id={institution.name} variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>
        )}

        {/* Technical Skills */}
        {about.technical.display && (
          <Column fillWidth gap="20">
            <Heading as="h2" id={about.technical.title} variant="display-strong-s">
              {about.technical.title}
            </Heading>
            <Column fillWidth gap="m">
              {about.technical.skills.map((skill, index) => (
                <Column
                  key={`${skill.title}-${index}`}
                  fillWidth
                  padding="24"
                  radius="l"
                  border="neutral-alpha-medium"
                  background="surface"
                  gap="8"
                >
                  <Text id={skill.title} variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, imgIndex) => (
                        <Row
                          key={imgIndex}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </Column>
        )}
      </Column>
    </Column>
  );
}