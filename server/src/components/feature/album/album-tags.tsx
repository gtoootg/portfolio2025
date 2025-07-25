import { Button } from "@/components/atoms/button/button";
import { Tag } from "@/components/atoms/tag/tag";

interface AlbumTagsProps {
  tags: string[];
  inputTag: string;
  handleTagSubmit: (e: React.FormEvent) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteTag: (tag: string) => void;
}

export const AlbumTags = ({
  handleTagSubmit,
  tags,
  inputTag,
  onChangeInput,
  onDeleteTag,
}: AlbumTagsProps) => {
  return (
    <div>
      <form onSubmit={handleTagSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputTag}
          onChange={onChangeInput}
          placeholder="タグを入力"
          className="border rounded px-3 py-2 w-48"
        />
        <Button label="register" />
      </form>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} onDelete={() => onDeleteTag(tag)} />
        ))}
      </div>
    </div>
  );
};
