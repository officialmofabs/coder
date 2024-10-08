import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import {
	MockOutdatedStoppedWorkspaceRequireActiveVersion,
	MockTemplateVersionParameter1,
	MockTemplateVersionParameter2,
	MockTemplateVersionParameter3,
	MockWorkspace,
	MockWorkspaceBuildParameter1,
	MockWorkspaceBuildParameter2,
	MockWorkspaceBuildParameter3,
} from "testHelpers/entities";
import { WorkspaceParametersPageView } from "./WorkspaceParametersPage";

const meta: Meta<typeof WorkspaceParametersPageView> = {
	title: "pages/WorkspaceSettingsPage/WorkspaceParametersPageView",
	component: WorkspaceParametersPageView,
	args: {
		submitError: undefined,
		isSubmitting: false,
		workspace: MockWorkspace,
		canChangeVersions: true,
		onCancel: action("onCancel"),

		data: {
			buildParameters: [
				MockWorkspaceBuildParameter1,
				MockWorkspaceBuildParameter2,
				MockWorkspaceBuildParameter3,
			],
			templateVersionRichParameters: [
				MockTemplateVersionParameter1,
				MockTemplateVersionParameter2,
				{
					...MockTemplateVersionParameter3,
					mutable: false,
				},
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof WorkspaceParametersPageView>;

const Example: Story = {};

export const Empty: Story = {
	args: {
		data: {
			buildParameters: [],
			templateVersionRichParameters: [],
		},
	},
};

export const RequireActiveVersionNoChangeVersion: Story = {
	args: {
		workspace: MockOutdatedStoppedWorkspaceRequireActiveVersion,
		canChangeVersions: false,
		data: {
			buildParameters: [
				MockWorkspaceBuildParameter1,
				MockWorkspaceBuildParameter2,
				MockWorkspaceBuildParameter3,
			],
			templateVersionRichParameters: [
				MockTemplateVersionParameter1,
				MockTemplateVersionParameter2,
				{
					...MockTemplateVersionParameter3,
					mutable: false,
				},
			],
		},
	},
};

export const RequireActiveVersionCanChangeVersion: Story = {
	args: {
		workspace: MockOutdatedStoppedWorkspaceRequireActiveVersion,
		canChangeVersions: true,
		data: {
			buildParameters: [
				MockWorkspaceBuildParameter1,
				MockWorkspaceBuildParameter2,
				MockWorkspaceBuildParameter3,
			],
			templateVersionRichParameters: [
				MockTemplateVersionParameter1,
				MockTemplateVersionParameter2,
				{
					...MockTemplateVersionParameter3,
					mutable: false,
				},
			],
		},
	},
};

export { Example as WorkspaceParametersPage };
