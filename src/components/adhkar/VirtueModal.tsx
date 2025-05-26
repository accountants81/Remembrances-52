'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

interface VirtueModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | null;
  isLoading: boolean;
}

export const VirtueModal: React.FC<VirtueModalProps> = ({ isOpen, onClose, title, content, isLoading }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] p-1">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-2 rtl:mr-2">جاري تحميل الفضائل...</p>
            </div>
          )}
          {!isLoading && content && (
            <DialogDescription className="text-foreground whitespace-pre-wrap py-4 text-base leading-relaxed">
              {content}
            </DialogDescription>
          )}
          {!isLoading && !content && (
            <DialogDescription className="py-4 text-base">
              لم يتم العثور على شرح أو حدث خطأ.
            </DialogDescription>
          )}
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>إغلاق</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
